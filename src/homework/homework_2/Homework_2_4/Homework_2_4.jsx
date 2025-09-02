import { useState, useEffect } from "react";
import Headers from "../../hw_components/Headers/Headers";
import { Navigation } from "../../hw_components/";
import Loading from "../../../components/Loading";

function Products() {
  const [posts, setPosts] = useState([]);
  const [bloger, setBloger] = useState([]);
  const [blogDetails, setBlogDetails] = useState([]);

  useEffect(() => {
    async function fetchBlog() {
      const blogs = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=12",
      ).then((r) => r.json());
      setPosts(blogs);

      blogs.map(async (post) => {
        const author = await fetch("https://randomuser.me/api/").then((r) =>
          r.json(),
        );
        const startOfYear = new Date(2025, 6, 1).getTime();
        const now = Date.now();
        const randomDate = new Date(
          startOfYear + Math.random() * (now - startOfYear),
        ).toLocaleDateString("vi-VN");

        const blog = {
          id: post.id,
          title: post.title,
          body: post.body,
          name: `${author.results[0].name.first} ${author.results[0].name.last}`,
          avatar: author.results[0].picture.medium,
          publishedAt: randomDate,
          duration: Math.floor(Math.random() * 9 + 2),
        };
        setBloger((prev) => [...prev, blog]);
      });

      setPosts(posts);
    }
    fetchBlog();
  }, [posts]);

  const Product = ({ bloger }) =>
    bloger.map((blog) => {
      return (
        <div
          key={blog.id}
          id={blog.id}
          className="blog-card"
          onClick={handleShowDetails}>
          <div className="header">
            <div className="author">
              <a href="/lengochuyen">
                <img className="avatar" src={blog.avatar} alt="" />
              </a>
              <a className="bloger" href="/lengochuyen">
                <span>{blog.name}</span>
              </a>
            </div>

            <div className="actions">
              <div className="blog-id">
                <strong>Blog Id: {blog.id}</strong>
              </div>
              <div className="toggle-btn">
                <svg
                  className="svg-inline--fa fa-bookmark"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512">
                  <path
                    fill="currentColor"
                    d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"></path>
                </svg>
              </div>
              <div className="option-btn">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="ellipsis"
                  className="svg-inline--fa fa-ellipsis"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512">
                  <path
                    fill="currentColor"
                    d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="blog-info">
            <a href="/blog/trai-nghiem-hoc-thu-react-native-devops-c-vo-cung-chat-luong-cung-f8-1">
              <h2 className="blog-title">{blog.title}</h2>
            </a>
            <p className="blog-desc">{blog.body}</p>

            <div className="blog-footer">
              <div className="metaInfo">
                <span className="post-time">Post at: {blog.publishedAt}</span>
                <span className="read-time">{blog.duration} phút đọc</span>
              </div>
              <button className="view-detail-btn">View Details</button>
            </div>
          </div>
        </div>
      );
    });

  const handleShowDetails = (e) => {
    const target = e.target.closest(".view-detail-btn");
    if (!target) return;
    const blogId = Number(e.currentTarget.id);
    if (target) {
      const blogDetail = bloger.find((item) => blogId === item.id);
      setBlogDetails([blogDetail]);
    }
  };

  const handleCloseDetails = (e) => {
    const overlay = e.target.closest(".details-overlay");
    const target = e.target.closest(".close-bog-detail-btn");
    if (target || overlay) setBlogDetails([]);
  };

  return (
    <div className="container">
      <Headers>
        <p className="desc">
          Chinh phục ReactJS cùng F8 -
          <a
            href="https://fullstack.edu.vn/"
            target="_blank"
            rel="noopener noreferrer">
            fullstack.edu.vn
          </a>
          Học lập trình để đi làm!
        </p>
      </Headers>
      <Navigation>
        <h2>Bài tập 2.1.5: Product List </h2>
        <a
          href="https://github.com/xuanphao19/ReactJS-Practice-F88/blob/main/src/homework/homework_2/Homework_2_4/Homework_2_4.jsx"
          className="repositories"
          target="_blank"
          rel="noopener noreferrer">
          Repositories GitHub
        </a>
      </Navigation>

      <div className="exercise-content">
        <div className="answer-content">
          <div className="blog-list">
            {bloger.length !== 0 ? <Product bloger={bloger} /> : <Loading />}
          </div>
        </div>
      </div>

      {blogDetails.length !== 0 && (
        <>
          <div class="details-overlay" onClick={handleCloseDetails}></div>
          <div className="blog-details">
            <button
              className="close-bog-detail-btn"
              onClick={handleCloseDetails}>
              Close
            </button>
            <Product bloger={blogDetails} />
          </div>
        </>
      )}
      {/* <Loading /> */}
    </div>
  );
}

export default Products;
