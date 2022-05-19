import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "./../../components/Input";
import { Button } from "../../components/Button";
import { postAuth } from "../../Services/auth.service";
import style from "./login.style.module.css";

export function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleOnClickLogin() {
    postAuth(email, password)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleOnInputEmail(event) {
    setEmail(event.target.value);
  }

  function handleOnInputPassword(event) {
    setPassword(event.target.value);
  }

  return (
    <>
      <main className={style.containerLogin}>
        <div className={style.item}>
          <Input onInput={handleOnInputEmail} placeholder="USUÁRIO" />
          <Input onInput={handleOnInputPassword} placeholder="SENHA" type="password" />
          <Button onClick={handleOnClickLogin}>ENTRAR</Button>
          <Link to="/register" className="Hiperlink">
            É novo por aqui?
            Clique aqui para se cadastrar!
          </Link>
        </div>
      </main>
    </>
  );
}
