import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Axios from "axios";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import { Link } from "react-router-dom";
import commentImg from "../assets/all-images/ava-1.jpg";
import "../styles/blog-details.css";
import blogData from "../assets/data/blogData.js";


const BlogDetails = () => {
  
  const { slug } = useParams();
  const [blog, setBlog] = useState({});
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [authorname,setAuthorname] =useState("");
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogResponse = await Axios.get(`http://localhost:4000/api/comments/get-comment/${slug}`);
        const commentResponse = await Axios.get("http://localhost:4000/api/comments/get-comment");
        setBlog(blogResponse.data);
        setComments(commentResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [slug]);

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await Axios.post("http://localhost:4000/api/comments/get-comment", {
        author: authorname,
        content: commentText,
      });
      setComments([...comments, response.data]);
      setCommentText("");
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  const handleReplySubmit = async (commentId, replyText) => {
    try {
      const response = await Axios.post(`http://localhost:4000/api/comments/get-reply/${commentId}`, {
        author: "Your Name",
        content: replyText,
      });

      const updatedComments = comments.map((comment) => {
        if (comment._id === commentId) {
          return {
            ...comment,
            replies: [...comment.replies, response.data],
          };
        }
        return comment;
      });

      setComments(updatedComments);
    } catch (error) {
      console.error("Error submitting reply:", error);
    }
  };

  return (

    <Helmet title={blog.title}>
      <section>
        <Container>
          <Row>
            
            <Col lg="8" md="8">
              
              <div className="blog__details">
                
                <img src={blog.imgUrl} alt="" className="w-100" />
                <h2 className="section__title mt-4">{blog.title}</h2>

                <div className="blog__publisher d-flex align-items-center gap-4 mb-4">
                  <span className="blog__author">
                    <i className="ri-user-line"></i> {blog.author}
                  </span>

                  <span className="d-flex align-items-center gap-1 section__description">
                    <i className="ri-calendar-line"></i> {blog.date}
                  </span>

                  <span className="d-flex align-items-center gap-1 section__description">
                    <i className="ri-time-line"></i> {blog.time}
                  </span>
                </div>

                <p className="section__description">{blog.description}</p>
                <h6 className="ps-5 fw-normal">
                  <blockquote className="fs-4">{blog.quote}</blockquote>
                </h6>
                <p className="section__description">{blog.description}</p>
              </div>

              <div className="comment__list mt-5">
                <h4 className="mb-5">Comments</h4>
                {comments.map((comment) => (
                  <div className="single__comment d-flex gap-3" key={comment.id}>
                    <img src={commentImg} alt="" />
                    <div className="comment__content">
                      <h6 className="fw-bold">{comment.author}</h6>
                      <p className="section__description mb-0">{comment.date}</p>
                      <p className="section__description">{comment.content}</p>
                      <span
                        className="replay d-flex align-items-center gap-1"
                        onClick={() => {
                          const replyText = prompt("Enter your reply:");
                          if (replyText) {
                            handleReplySubmit(comment.id, replyText);
                          }
                        }}
                      >
                        <i className="ri-reply-line"></i> Reply
                      </span>
                      {/* Display replies */}
                      {comment.replies.map((reply) => (
                        <div className="single__comment d-flex gap-3" key={reply.id}>
                          <img src={commentImg} alt="" />
                          <div className="comment__content">
                            <h6 className="fw-bold">{reply.author}</h6>
                            <p className="section__description mb-0">{reply.date}</p>
                            <p className="section__description">{reply.content}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="leave__comment-form mt-5">
                  <h4>Leave a Comment</h4>
                  <p className="section__description">
                    You must sign-in to make or comment a post
                  </p>

                  <Form>
                    <FormGroup className="d-flex gap-3">
                      <Input type="text"  onChange={(e) => setAuthorname(e.target.value)}
                        value={authorname} placeholder="Full name" />
                      <Input type="email" placeholder="Email" />
                    </FormGroup>

                    <FormGroup>
                      <textarea
                        rows="5"
                        className="w-100 py-2 px-3"
                        placeholder="Comment..."
                        onChange={(e) => setCommentText(e.target.value)}
                        value={commentText}
                      ></textarea>
                    </FormGroup>

                    <button onClick={handleCommentSubmit} className="btn comment__btn mt-3">
                      Post a Comment
                    </button>
                  </Form>
                </div>
              </div>
            </Col>

            <Col lg="4" md="4">
              <div className="recent__post mb-4">
                <h5 className="fw-bold">Recent Posts</h5>
              </div>
              {blogData.map((item) => (
                <div className="recent__blog-post mb-4" key={item.id}>
                  <div className="recent__blog-item d-flex gap-3">
                    <img src={item.imgUrl} alt="" className="w-25 rounded-2" />
                    <h6>
                      <Link to={`/blogs/${item.title}`}>{item.title}</Link>
                    </h6>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>

  );
};

export default BlogDetails;













// import React, { useEffect } from "react";
// import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";

// import { useParams } from "react-router-dom";
// import blogData from "../assets/data/blogData.js";
// import Helmet from "../components/Helmet/Helmet";
// import { Link } from "react-router-dom";

// import commentImg from "../assets/all-images/ava-1.jpg";

// import "../styles/blog-details.css";

// const BlogDetails = () => {
//   const { slug } = useParams();
//   const blog = blogData.find((blog) => blog.title === slug);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [blog]);

//   return (
//     <Helmet title={blog.title}>
//       <section>
//         <Container>
//           <Row>
//             <Col lg="8" md="8">
              // <div className="blog__details">
                // <img src={blog.imgUrl} alt="" className="w-100" />
                // <h2 className="section__title mt-4">{blog.title}</h2>

                // <div className="blog__publisher d-flex align-items-center gap-4 mb-4">
                //   <span className="blog__author">
                //     <i class="ri-user-line"></i> {blog.author}
                //   </span>

                //   <span className=" d-flex align-items-center gap-1 section__description">
                //     <i class="ri-calendar-line"></i> {blog.date}
                //   </span>

                //   <span className=" d-flex align-items-center gap-1 section__description">
                //     <i class="ri-time-line"></i> {blog.time}
                //   </span>
                // </div>

//                 <p className="section__description">{blog.description}</p>
//                 <h6 className="ps-5 fw-normal">
//                   <blockquote className="fs-4">{blog.quote}</blockquote>
//                 </h6>
//                 <p className="section__description">{blog.description}</p>
//               </div>

//               <div className="comment__list mt-5">
//                 <h4 className="mb-5">3 Comments</h4>

//                 <div className="single__comment d-flex gap-3">
//                   <img src={commentImg} alt="" />
//                   <div className="comment__content">
//                     <h6 className=" fw-bold">David Visa</h6>
//                     <p className="section__description mb-0">14 July, 2022</p>
//                     <p className="section__description">
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Eos nobis totam eius laborum molestias itaque minima
//                       distinctio, quae velit tempore!
//                     </p>

//                     <span className="replay d-flex align-items-center gap-1">
//                       <i class="ri-reply-line"></i> Replay
//                     </span>
//                   </div>
//                 </div>

//                 {/* =============== comment form ============ */}
//                 <div className="leave__comment-form mt-5">
//                   <h4>Leave a Comment</h4>
//                   <p className="section__description">
//                     You must sign-in to make or comment a post
//                   </p>

//                   <Form>
//                     <FormGroup className=" d-flex gap-3">
//                       <Input type="text" placeholder="Full name" />
//                       <Input type="email" placeholder="Email" />
//                     </FormGroup>

//                     <FormGroup>
//                       <textarea
//                         rows="5"
//                         className="w-100 py-2 px-3"
//                         placeholder="Comment..."
//                       ></textarea>
//                     </FormGroup>

//                     <button className="btn comment__btn mt-3">
//                       Post a Comment
//                     </button>
//                   </Form>
//                 </div>
//               </div>
//             </Col>

//             <Col lg="4" md="4">
//               <div className="recent__post mb-4">
//                 <h5 className=" fw-bold">Recent Posts</h5>
//               </div>
//               {blogData.map((item) => (
//                 <div className="recent__blog-post mb-4" key={item.id}>
//                   <div className="recent__blog-item d-flex gap-3">
//                     <img src={item.imgUrl} alt="" className="w-25 rounded-2" />
//                     <h6>
//                       <Link to={`/blogs/${item.title}`}>{blog.title}</Link>
//                     </h6>
//                   </div>
//                 </div>
//               ))}
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default BlogDetails;

// import React, { useState, useEffect } from "react";
// import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
// import blogData from "../assets/data/blogData.js";

// import { useParams } from "react-router-dom";
// import Helmet from "../components/Helmet/Helmet";
// import { Link } from "react-router-dom";

// import commentImg from "../assets/all-images/ava-1.jpg";

// import "../styles/blog-details.css";

// const BlogDetails = () => {
//   const { slug } = useParams();
//   const [blog, setBlog] = useState({});
//   const [comments, setComments] = useState([]);
//   const [commentText, setCommentText] = useState("");

//   useEffect(() => {
//     const fetchedBlog = blogData.find((blog) => blog.title === slug);
//     setBlog(fetchedBlog);
//     // You may fetch comments from an API or other source here
//     // For simplicity, I'll set some sample comments
//     setComments([
//       {
//         id: 1,
//         author: "David Visa",
//         date: "14 July, 2022",
//         content:
//           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nobis totam eius laborum molestias itaque minima distinctio, quae velit tempore!",
//         replies: [],
//       },
//     ]);
//   }, [slug]);

//   const handleCommentSubmit = (event) => {
//     event.preventDefault();
//     // Handle comment submission logic here
//     // You may send the comment to your server or update the state
//     const newComment = {
//       id: comments.length + 1,
//       author: "Your Name", // You can replace with actual user data
//       date: new Date().toLocaleDateString(),
//       content: commentText,
//       replies: [],
//     };
//     setComments([...comments, newComment]);
//     setCommentText("");
//   };

//   const handleReplySubmit = (commentId, replyText) => {
//     // Handle reply submission logic here
//     // You may send the reply to your server or update the state
//     const updatedComments = comments.map((comment) => {
//       if (comment.id === commentId) {
//         return {
//           ...comment,
//           replies: [
//             ...comment.replies,
//             {
//               id: comment.replies.length + 1,
//               author: "Your Name", // You can replace with actual user data
//               date: new Date().toLocaleDateString(),
//               content: replyText,
//             },
//           ],
//         };
//       }
//       return comment;
//     });
//     setComments(updatedComments);
//   };

//   return (
//     <Helmet title={blog.title}>
//       <section>
//         <Container>
//           <Row>
//             <Col lg="8" md="8">
              // <div className="blog__details">
              //   <img src={blog.imgUrl} alt="" className="w-100" />
              //   <h2 className="section__title mt-4">{blog.title}</h2>

              //   <div className="blog__publisher d-flex align-items-center gap-4 mb-4">
              //     <span className="blog__author">
              //       <i className="ri-user-line"></i> {blog.author}
              //     </span>

              //     <span className="d-flex align-items-center gap-1 section__description">
              //       <i className="ri-calendar-line"></i> {blog.date}
              //     </span>

              //     <span className="d-flex align-items-center gap-1 section__description">
              //       <i className="ri-time-line"></i> {blog.time}
              //     </span>
              //   </div>

              //   <p className="section__description">{blog.description}</p>
              //   <h6 className="ps-5 fw-normal">
              //     <blockquote className="fs-4">{blog.quote}</blockquote>
              //   </h6>
              //   <p className="section__description">{blog.description}</p>
              // </div>

              // <div className="comment__list mt-5">
              //   <h4 className="mb-5">Comments</h4>
              //   {comments.map((comment) => (
              //     <div className="single__comment d-flex gap-3" key={comment.id}>
              //       <img src={commentImg} alt="" />
              //       <div className="comment__content">
              //         <h6 className="fw-bold">{comment.author}</h6>
              //         <p className="section__description mb-0">{comment.date}</p>
              //         <p className="section__description">{comment.content}</p>
              //         <span
              //           className="replay d-flex align-items-center gap-1"
              //           onClick={() => {
              //             const replyText = prompt("Enter your reply:");
              //             if (replyText) {
              //               handleReplySubmit(comment.id, replyText);
              //             }
              //           }}
              //         >
              //           <i className="ri-reply-line"></i> Reply
              //         </span>
              //         {/* Display replies */}
              //         {comment.replies.map((reply) => (
              //           <div className="single__comment d-flex gap-3" key={reply.id}>
              //             <img src={commentImg} alt="" />
              //             <div className="comment__content">
              //               <h6 className="fw-bold">{reply.author}</h6>
              //               <p className="section__description mb-0">{reply.date}</p>
              //               <p className="section__description">{reply.content}</p>
              //             </div>
              //           </div>
              //         ))}
              //       </div>
              //     </div>
              //   ))}
              //   <div className="leave__comment-form mt-5">
              //     <h4>Leave a Comment</h4>
              //     <p className="section__description">
              //       You must sign-in to make or comment a post
              //     </p>

              //     <Form>
              //       <FormGroup className="d-flex gap-3">
              //         <Input type="text" placeholder="Full name" />
              //         <Input type="email" placeholder="Email" />
              //       </FormGroup>

              //       <FormGroup>
              //         <textarea
              //           rows="5"
              //           className="w-100 py-2 px-3"
              //           placeholder="Comment..."
              //           onChange={(e) => setCommentText(e.target.value)}
              //           value={commentText}
              //         ></textarea>
              //       </FormGroup>

              //       <button onClick={handleCommentSubmit} className="btn comment__btn mt-3">
              //         Post a Comment
              //       </button>
              //     </Form>
              //   </div>
              // </div>
//             </Col>

//             <Col lg="4" md="4">
//               <div className="recent__post mb-4">
//                 <h5 className="fw-bold">Recent Posts</h5>
//               </div>
//               {blogData.map((item) => (
//                 <div className="recent__blog-post mb-4" key={item.id}>
//                   <div className="recent__blog-item d-flex gap-3">
//                     <img src={item.imgUrl} alt="" className="w-25 rounded-2" />
//                     <h6>
//                       <Link to={`/blogs/${item.title}`}>{item.title}</Link>
//                     </h6>
//                   </div>
//                 </div>
//               ))}
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default BlogDetails;


//no images for the buttom one

// BlogDetails.jsx 