import Header from "../../components/Header/Header";
import "./homepage.scss";
import Content from "../../components/Content/Content";
import Aside from "../../components/Aside/Aside";
import { useAppSelector } from "../../hooks/hooks";
import Modal from "../../components/Header/Modalwindow/Modal";

const HomePage = () => {

  const { isAuth } = useAppSelector(state => state.user)

  return (
    <div className="homepage">
      <Header />
      <div className="home__parrent">
      <div className="home__content">
       { <Content />}
      </div>
        <Aside />
      </div>
    </div>
  );
};

export default HomePage;
