import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import SetupRouter from "../homework/homework_2/SetupRouter/SetupRouter.jsx";
import ShowButtons from "../homework/homework_2/ShowButtons/ShowButtons.jsx";
import Counter from "../homework/homework_2/Homework_2_1/Homework_2_1.jsx";
import TodoApp from "../homework/homework_2/Homework_2_2/Homework_2_2";
import Profile from "../homework/homework_2/Homework_2_3/Homework_2_3";
import Products from "../homework/homework_2/Homework_2_4/Homework_2_4";
import Comments from "../homework/homework_2/Homework_2_5/Homework_2_5";
import Weathers from "../homework/homework_2/Homework_2_6/Homework_2_6";

function AppRoutes() {
  const basename =
    import.meta.env.MODE === "production" ? "/ReactJS-Practice-F88/" : "/";

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/comment" element={<Comments />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/todo-app" element={<TodoApp />} />
        <Route path="/weathers" element={<Weathers />} />
        <Route path="/setup-router" element={<SetupRouter />} />
        <Route path="/nice-button" element={<ShowButtons />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
