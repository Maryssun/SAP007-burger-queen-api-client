import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "./../../components/Input";
import { InputPassword } from "./../../components/InputPassword";
import { Button } from "../../components/Button";
import { Form } from "../../components/Form";
import { Error } from "../../components/Error";
import { Select } from "../../components/Select";
import { createUser } from "../../services/user.service";
import { setToken } from "../../services/auth.service";
import burgerQueen from "./../../assets/images/burguerQueen.png";
import style from "./register.style.module.css";

export function Register() {

  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [nomeErro, setNomeErro] = useState(false);

  const [email, setEmail] = useState("");
  const [emailErro, setEmailErro] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordErro, setPasswordErro] = useState(false);
  
  const [role, setRole] = useState('');
  const [roleErro, setRoleErro] = useState(false);
  
  const opcoesSelect = [
    {
      value: "setor",
      text: "Setor",
      selected: true,
      disabled: true
    },
    {
      value: "kitchen",
      text: "Cozinha",
      selected: false,
      disabled: false
    },
    {
      value: "hall",
      text: "Salão",
      selected: false,
      disabled: false
    }
  ];


  function handleOnClickRegister() {
    if(!nome) {
      setNomeErro(true);
    }

    if(!email) {
      setEmailErro(true);
    }

    if(!password) {
      setPasswordErro(true);
    }
    
    if(!role) {
      setRoleErro(true);
    }

    if(nome && email && password && role) {
      createUser(nome, email, password, role) 
      .then((response) => {
        setToken(response.token);
        navigate("../" + response.role);
      })
      .catch((error) => {
        console.log(error);
      });
    }

  }
  
  function handleOnInputNome(event) {
    setNome(event.target.value);
    setNomeErro(false);
  } 

  function handleOnInputEmail(event) {
    setEmail(event.target.value);
    setEmailErro(false);
  }

  function handleOnInputPassword(event) {
    setPassword(event.target.value);
    setPasswordErro(false);
  }

  function handleOnChangeRole(event) {
    setRole(event.target.value);
    setRoleErro(false);
  }

  return (
    <>
      <main className={style.containerLogin}>
        <div className={style.containerImg}>
          <img src={burgerQueen} className={style.imgTittle} alt="titulo burger queen" />
        </div>
        <Form className={style.form}>
          <Input onInput={handleOnInputNome} placeholder="Nome completo" error={nomeErro} msgError={"Insira um nome"}  />
          <Input onInput={handleOnInputEmail} placeholder="E-mail" error={emailErro} msgError={"Insira um e-mail válido"}  />
          <InputPassword onInput={handleOnInputPassword} placeholder="Senha" error={passwordErro} msgError={"Insira a senha"}  />
          <Select options={opcoesSelect} onChange={handleOnChangeRole} name="role" id="kitchen" className={style.radioInput} />
          {roleErro && <Error>Selecione um setor</Error>}
          <Button onClick={handleOnClickRegister} type="submit">CADASTRAR</Button>
          <Link to="/" className={style.hiperlink}>
            Já possui cadastro? Clique aqui para entrar!
          </Link>
        </Form>
      </main>
    </>
  );
}
