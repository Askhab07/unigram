import "./App.scss";
import Authorization from "./Pages/Authorization/Authorization";
import { Route, Routes, useNavigate } from "react-router";
import HomePage from "./Pages/Home/HomePage";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { useEffect } from "react";
import { setTokenBaseService } from "./api/api";
import { validationToken } from "./store/reducers/userAction";

function App() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  const { isLoading, isAuth } = useAppSelector((state) => state.user);

  console.log(isAuth);
  

  const handleAuth = async () => {
    try {
      setTokenBaseService();
      await dispatch(validationToken()).unwrap();
      navigate('/')
    } catch {
        console.log('error');
        navigate('/authorization')
    }
  }

  useEffect(() => {
    handleAuth()
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
