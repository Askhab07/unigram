import Menu from "../../components/Header/Header";
import "./homepage.scss";
import Content from "../../components/Content/Content";
import Aside from "../../components/Aside/Aside";
import { Navigate } from "react-router";
import { useAppSelector } from "../../hooks/hooks";

const HomePage = () => {

  const { isAuth } = useAppSelector(state => state.user)

  return (
    <div className="homepage">
      <Menu />
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
