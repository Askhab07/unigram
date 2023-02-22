import { useState } from "react";
import logo from "../../assets/instagram.svg";
import "./authorization.scss"
import {authorization} from "../../store/reducers/instaAction"
import { useAppDispatch } from "../../hooks/hooks";

const Authorization = () => {

  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const dispatch = useAppDispatch()

  const signIn = () => {
    dispatch(authorization({username, password}))
  }

  return (
    <div className="authorization">
      <div className="logo">
        <img src={logo} alt="instagram" />
      </div>
      <div className="form__input">
        <input
          type="text"
          placeholder="Телефон, имя пользователя или эл.адрес"
          value={username}
          onChange={(e)=> setUsername(e.target.value)}
        />
        <input type="password" placeholder="Пароль"  value={password}
          onChange={(e)=> setPassword(e.target.value)}/>
        <button onClick={signIn}>Войти</button>
      </div>
    </div>
  );
};

export default Authorization;
