import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "./../../components/Input";
import { InputPassword } from "./../../components/InputPassword";
import { Button } from "../../components/Button";
import { postAuth } from "../../services/auth.service";
import style from "./login.style.module.css";
import burguerQueen from "./../../assets/images/burguerQueen.png";

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
        <div className={style.containerImg}>
          <img src={burguerQueen} className={style.imgTittle} alt="titulo burger queen" />
        </div>
        <form className={style.form}>
          <Input onInput={handleOnInputEmail} placeholder="E-mail" />
          <InputPassword onInput={handleOnInputPassword} placeholder="Senha" />
          <Button onClick={handleOnClickLogin}>ENTRAR</Button>
          <Link to="/register" className={style.hiperlink}>
            É novo por aqui? Clique aqui para se cadastrar!
          </Link>
        </form>
      </main>
    </>
  );
}
