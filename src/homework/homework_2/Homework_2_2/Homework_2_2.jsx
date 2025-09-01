import { useState, useEffect } from "react";
import Header from "../../../layout/Header/Header";
import Headers from "../../hw_components/Headers/Headers";
import { Navigation } from "../../hw_components";

function TodoApp() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [uniqId, setUniqId] = useState(0);
  const [done, setDone] = useState({ finished: 0, unfinished: 0 });

  useEffect(() => {
    const fobs = JSON.parse(localStorage.getItem("todos")) || [];
    if (fobs.length) {
      setUniqId(Math.max(...fobs.map((item) => item.id)));
    }
    setTodos(fobs);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    handleFinished();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos]);

  const handleInputChange = (e) => {
    if (!e.target.value) return;
    setInputValue(e.target.value); // Lấy giá trị từ input
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    document.querySelector("#todo-input").focus();
    if (!inputValue) return;
    if (inputValue.trim()) {
      setTodos([
        ...todos,
        { id: uniqId + 1, text: inputValue, completed: false },
      ]);
      setInputValue("");
      setUniqId(uniqId + 1);
    }
  };

  const handleChecked = (e) => {
    const tasks = todos.map((item) => {
      if (item.id === Number(e.target.closest(".task-detail").id)) {
        item.completed = !item.completed;
      }
      return item;
    });
    handleFinished();
    setTodos([...tasks]);
  };

  const handleDelete = (e) => {
    const eleDelete = e.target.closest(".task-detail");
    const tasks = todos.filter((item) => {
      return item.id !== Number(eleDelete.id);
    });
    setTodos(tasks);
  };

  const handleFinished = () => {
    const jobs = todos.filter((item) => {
      return item.completed === true;
    });
    setDone({
      finished: jobs.length,
      unfinished: todos.length - jobs.length,
    });
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
        <h2 className="exercise_1">Bài tập 2.1.3: Todo List App</h2>
        <a
          href="https://github.com/xuanphao19/ReactJS-Practice-F88/blob/main/src/homework/homework_2/Homework_2_2.jsx"
          className="repositories">
          Repositories GitHub
        </a>
      </Navigation>

      <div className="exercise-content">
        <div className="wrapper todo-list">
          <ul className="list-task">
            {todos.length > 0 ? (
              todos.map((task) => {
                return (
                  <li key={task.id} id={task.id} className="task-detail">
                    <input
                      className="task-ctrl"
                      type="checkbox"
                      name="checkbox"
                      checked={task.completed}
                      onChange={handleChecked}
                    />
                    <p className="task-name">{task.text}</p>
                    <button onClick={handleDelete} className="delete-task">
                      Xóa
                    </button>
                  </li>
                );
              })
            ) : (
              <li className="vain">
                Chưa có công việc. Thêm công việc đầu tiên
              </li>
            )}
          </ul>

          <div className="statistical">
            <span className="total-work">Tổng: {todos.length}</span>
            <span className="completed-work">Đã làm: {done.finished}</span>
            <span className="incomplete-work">Chưa làm: {done.unfinished}</span>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              id="todo-input"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Nhập công việc mới..."
            />
            <button type="submit">Thêm</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TodoApp;
