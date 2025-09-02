import Header from "../../layout/Header/Header";
import ContentTheory from "../../contentTheory";
import Navigations from "../../layout/Navigations";
import BackToTop from "../../components/BackToTop";

function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="exercise-content home-content">
          <a
            href="https://github.com/xuanphao19/ReactJS-Practice-F88"
            className="repositories"
            target="_blank"
            rel="noopener noreferrer">
            Repositories GitHub
          </a>
          <ContentTheory />
          <Navigations isRoot />

          <BackToTop />
        </div>
      </div>
    </>
  );
}

export default Home;
