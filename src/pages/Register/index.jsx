/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
// import { setToken } from "./../../services/Token";
import { Input } from "./../../components/Input";
import { Button } from "./../../components/Button";
import { Select } from "./../../components/Select";
import { Link , useNavigate } from "react-router-dom";
import style from "./register.style.module.css";
// import { createUser } from "./../../services/user.service";
// import burguerQueen from "./../../assets/images/burguerQueen.png";



export function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [role, setRole] = useState('');
  const navigate = useNavigate('');

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

  return (
    <>
      <main className={style.containerLogin}>
        <div className={style.item}>
        <Input placeholder="NOME"/>
        <Input placeholder="USUÁRIO" />
        <Input placeholder="SENHA" type="password" />
        <Select options={opcoesSelect} />
        <Button>CRIAR CONTA</Button>
        </div>
      </main>
    </>

  )
}