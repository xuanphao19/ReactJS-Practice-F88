import { useState, useEffect } from "react";

import Headers from "../../hw_components/Headers/Headers";
import { Navigation } from "../../hw_components/index";
import Loading from "../../../components/Loading";

function Comments() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState({
    name: "",
    email: "",
    body: "",
    avatarUrl: "",
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
      .then((res) => res.json())
      .then((data) => setData(data))
      .finally(() => setLoading(false));
  }, []);

  const FakeTime = () => {
    const maxOffset = 7 * 24 * 60 * 60 * 1000;
    const minOffset = 60 * 1000;
    const randomOffset = Math.floor(
      Math.random() * (maxOffset - minOffset) + minOffset,
    );
    const pastDate = new Date(Date.now() - randomOffset);
    const diffMs = Date.now() - pastDate.getTime();

    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMinutes < 60) {
      return ` ${diffMinutes} phút trước`;
    } else if (diffHours < 24) {
      return ` ${diffHours} giờ trước`;
    } else {
      return ` ${diffDays} ngày trước`;
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setComment((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([{ ...comment }, ...data]);
    setComment({ name: "", email: "", body: "" });
  };

  return (
    <div className="container">
      <Headers>
        <p className="desc">
          Chinh phục ReactJS cùng F8 -
          <a href="https://fullstack.edu.vn/">fullstack.edu.vn</a> Học lập trình
          để đi làm!
        </p>
      </Headers>
      <Navigation>
        <h2>Bài tập 2.5: Comment System</h2>
        <a
          href="https://github.com/xuanphao19/ReactJS-Practice-F88/blob/main/src/homework/homework_2/Homework_2_5/Homework_2_5.jsx"
          className="repositories">
          Repositories GitHub
        </a>
      </Navigation>
      <div className="exercise-content">
        <form className="form-data" onSubmit={handleSubmit}>
          <input
            id="name"
            placeholder="Name Enter"
            value={comment.name}
            onChange={handleInputChange}
          />
          <input
            id="email"
            placeholder="Email Enter"
            value={comment.email}
            onChange={handleInputChange}
          />
          <textarea
            rows="5"
            id="body"
            placeholder="Comment  Enter"
            value={comment.body}
            onChange={handleInputChange}
          />
          <button
            className="btn-submit"
            disabled={!comment.name || !comment.email || !comment.body}>
            Comment
          </button>
        </form>

        <div className="user-comment">
          {loading ? (
            <Loading />
          ) : (
            data.map((c, i) => (
              <div className="user" key={i}>
                <img
                  className="user-avatar"
                  src={`https://ui-avatars.com/api/?name=${c.name}&background=random`}
                  alt="avatar"
                />
                <div className="user-info">
                  <div className="user-name">
                    <strong>{c.name}</strong> - {c.email}
                    <FakeTime />
                  </div>
                  <p>{c.body}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      {/* <BackToTop /> */}
    </div>
  );
}

export default Comments;
