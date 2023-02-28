import "./App.scss";
import Authorization from "./Pages/Authorization/Authorization";
import { Route, Routes } from "react-router";
import HomePage from "./Pages/Home/HomePage";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { useEffect } from "react";
import { setTokenBaseService } from "./api/api";
import { validationToken } from "./store/reducers/userAction";
import { getPosts } from "./store/reducers/postAction";

function App() {
  const dispatch = useAppDispatch();

  const { isLoading, isAuth } = useAppSelector((state) => state.user);

  useEffect(() => {
    setTokenBaseService();
    dispatch(validationToken());
    dispatch(getPosts());
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Routes>
        {isAuth ? (
          <Route path="/" element={<HomePage />} />
        ) : (
          <Route path="/authorization" element={<Authorization />}></Route>
        )}
      </Routes>
    </div>
  );
}

export default App;
