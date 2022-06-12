import { useEffect, useRef, useState } from "react";
import style from "./product.style.module.css";

export function Product(props) {
  const produto = props.product;
  const preco = String(produto.price.toFixed(2)).replace(".", ",");

  const [qtd, setQtd] = useState(0);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } 
    else if (props.onInput) {
        props.onInput(qtd);
    }
  }, [qtd]); // eslint-disable-line

  function handleClickAdicionar() {
    setQtd((qtd) => {
      if (qtd >= 0) {
        return ++qtd;
      }
      else if (qtd < 0) {
        return 0;
      }
      return qtd;
    });
  }

  function handleClickSubtrair() {
    setQtd((qtd) => {
      if (qtd > 0) {
        return --qtd;
      }
      else if (qtd < 0) {
        return 0;
      }
      return qtd;
    });
  }

  function handleChangeQtd(event) {
    const value = event.target.value;

    if(!Number(value) < 0 || value === "") {
      setQtd(1);
    }
    else {
      setQtd(value);
    }
  }

  return (
    <>
      <div className={style.product}>
        <div className={style.contentImgProduto}>
          <img
            className={style.imgProduto}
            src={produto.image}
            alt={produto.nome}
          />
        </div>

        <div className={style.contentInformacoes}>
          <div className={style.contentTitulo}>
            <p className={style.nome}>{produto.name}</p>
            <p className={style.preco}>
              <span className={style.cifra}>R$</span>
              {preco}
            </p>
          </div>

          <p>Sabor: {produto.flavor?.toLowerCase() || "não aplicável"}</p>
          <p>{produto.complement && `Complemento: ${produto.complement?.toLowerCase()}`}</p>

          <div className={style.contadorItens}>
            <button onClick={handleClickSubtrair}>-</button>
            <input
              value={qtd}
              onInput={handleChangeQtd}
              type="number"
              min={0}
              step={1}
            />
            <button onClick={handleClickAdicionar}>+</button>
          </div>
        </div>
      </div>
    </>
  );
}
