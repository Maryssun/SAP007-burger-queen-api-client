import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "./../../components/Input";
import { InputPassword } from "./../../components/InputPassword";
import { Button } from "../../components/Button";
import { Form } from "../../components/Form";
import { Error } from "../../components/Error";
import { postAuth, setToken } from "../../services/auth.service";
import style from "./login.style.module.css";
import burguerQueen from "./../../assets/images/burguerQueen.png";

export function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [emailErro, setEmailErro] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordErro, setPasswordErro] = useState(false);

  const [erroAuth, setErroAuth] = useState(false);

  function handleOnClickLogin() {
    if (!email) {
      setEmailErro(true);
    }

    if (!password) {
      setPasswordErro(true);
    }

    if (email && password) {
      postAuth(email, password)
        .then((response) => {
          if (response.token) {
            setToken(response.token);
            navigate(response.role);
          }

          if (response.code === 400) {
            setErroAuth(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function handleOnInputEmail(event) {
    setEmail(event.target.value);
    setEmailErro(false);
  }

  function handleOnInputPassword(event) {
    setPassword(event.target.value);
    setPasswordErro(false);
  }

  return (
    <>
      <main className={style.containerLogin}>
        <div className={style.containerImg}>
          <img
            src={burguerQueen}
            className={style.imgTittle}
            alt="titulo burger queen"
          />
        </div>
        <Form className={style.form}>
          {erroAuth && <Error>E-mail ou senha inválidos</Error>}
          <Input
            onInput={handleOnInputEmail}
            placeholder="E-mail"
            error={emailErro}
            msgError={"Insira um e-mail válido"}
            required
          />
          <InputPassword
            onInput={handleOnInputPassword}
            placeholder="Senha"
            error={passwordErro}
            msgError={"Insira a senha"}
            required
          />
          <Button onClick={handleOnClickLogin} type="submit">
            ENTRAR
          </Button>
          <Link to="/register" className={style.hiperlink}>
            É novo por aqui? Clique aqui para se cadastrar!
          </Link>
        </Form>
      </main>
    </>
  );
}
