import React, { useState } from "react";
import { setToken } from "../../Services/Token";
import { Input } from "./../../components/Input";
import { Select } from "../../components/Select";
import { Button } from "../../components/Button";
import { Link , useNavigate } from "react-router-dom";
import style from "./register.style.module.css";
import { createUser } from "../../Services/user.service";


export function Register() {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState(); 
  const [role, setRole] = useState();
  const navigate = useNavigate();
  
  function handleSubmit(e) {
    e.preventDefault();
    createUser(name, email, password, role)
      .then((response)=>{
        if (response.status === 200){
          return response.json();
        }
      })
      .then((data )=>{  
        setToken(data.token, data.role  );
        navigate(data.role === "role"? "/hall" : "/kitchen"); 
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  return (
    <>
      <main className={style.containerLogin}>
        <form className={style.item} onSubmit={createUser}>
        <Input placeholder="Nome completo" onChange={(e) => setName(e.target.value)}/>
        <Input placeholder="Email"  onChange={(e) => setEmail(e.target.value)}/>
        <Input placeholder="Senha" type="password" onChange={(e) => setPassword(e.target.value)}/>
        <Select defautValue={"Selecione o seu setor"} onChange={handleSubmit}>
          <options value="Selecione o seu setor">Selecione o seu setor</options>
          <options value="Hall">Salão</options>
          <options value="Kitchen">Cozinha</options>
        </Select>
        <Button onClick={handleSubmit}>CRIAR CONTA</Button>
        <Link to="/" className="Hiperlink">
        Já tenho cadastro
        </Link>
        </form>
      </main>
    </>
  );
}
