import style from "./productOrder.style.module.css";

export function ProductOrder(props) {
  const order = props.order;

  return (
    <>
      <div className={style.product}>
        <p className={style.qtd}>{String(order.qtd).padStart(2, "00")}x</p>
        <p className={style.name}>{order.name}</p>
        <p className={style.flavor}>{order.flavor && `[ ${order.flavor} ]`}</p>
      </div>
    </>
  );
}
