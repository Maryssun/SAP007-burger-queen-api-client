import { useState } from "react";
import { Button } from "../Button";
import { Select } from "../Select";
import style from "./client.style.module.css";

export function Client(props) {
  const [client, setClient] = useState("");

  const opcoesSelect = [
    {
      value: "mesa",
      text: "Mesa",
      selected: true,
      disabled: true,
    },
  ];

  const qtdMesas = 10;

  for (let index = 1; index < qtdMesas + 1; index++) {
    opcoesSelect.push({
      value: `Mesa ${index.toString().padStart(2, "00")}`,
      text: `Mesa ${index.toString().padStart(2, "00")}`,
      selected: false,
      disabled: false,
    });
  }

  function handleClickAddOrder() {
    if(props.onClickAddOrder) {
      props.onClickAddOrder(client);
    }
  }
  
  function handleClickShowOrder() {
    if(props.onClickShowOrder) {
      props.onClickShowOrder(client);
    }
  }

  return (
    <>
      <div className={style.client}>
        <div className={style.select}>
          <Select options={opcoesSelect} border={true} onChange={(e) => setClient(e.target.value)} />
        </div>
        <div className={style.button}>
          <Button white={true} onClick={handleClickShowOrder}>Ver comanda</Button>
        </div>
        <div className={style.button}>
          <Button gold={true} disabled={!client} onClick={handleClickAddOrder}>Adicionar pedido</Button>
        </div>
      </div>
    </>
  );
}
