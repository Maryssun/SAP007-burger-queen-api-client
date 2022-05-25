/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { setToken } from "./../../services/Token";
import { Input } from "./../../components/Input";
import { Button } from "./../../components/Button";
import { Select } from "./../../components/Select";
import { Link , useNavigate } from "react-router-dom";
import style from "./register.style.module.css";
import { createUser } from "./../../services/user.service";
import burguerQueen from "./../../assets/images/burguerQueen.png";



export function Register() {

  const opcoesSelect = [
    {
      value: "setor",
      text: "Setor",
      selected: true,
      disabled: true
    },
    {
      value: "cozinha",
      text: "Cozinha",
      selected: false,
      disabled: false
    },
    {
      value: "salao",
      text: "Salão",
      selected: false,
      disabled: false
    }
  ];

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [role, setRole] = useState('');
  const navigate = useNavigate('');
  
  function handleSubmit(e) {
    e.preventDefault();
    createUser(name, email, password, role)
      .then((response)=>{
        console.log(response)
        console.log(name)
        console.log(email)
        console.log(password)
        console.log(role)
        if (response.status === 200){
          return response.json();
        }
      })
      .then((data )=>{  
        setToken(data.token, data.role);
        navigate(data.role === "role"? "/hall" : "/kitchen"); 
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  return (
    <>
      <main className={style.containerRegister}>
        <div className={style.containerImg}>
          <img src={burguerQueen} className={style.imgTittle}/>
        </div> 
        <form className={style.form} onSubmit={createUser}>
          <Input placeholder="Nome completo" onInput={(e) => setName(e.target.value)}/>
          <Input placeholder="Email" onInput={(e) => setEmail(e.target.value)}/>
          <Input placeholder="Senha" type="password" onInput={(e) => setPassword(e.target.value)}/>
          <Select options={opcoesSelect} value="kitchen" name="role" id="kitchen" className={style.radioInput} onInput={(e) => setRole(e.target.value)}/>
          <Button onClick={handleSubmit}>CRIAR CONTA</Button>
          <Link to="/" className={style.hiperlink}>
          Já tenho cadastro
          </Link>
        </form>
      </main>
    </>
  );
}
