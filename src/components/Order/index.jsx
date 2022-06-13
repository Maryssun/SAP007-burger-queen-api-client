import { Button } from "../Button";
import { ProductOrder } from "../ProductOrder";
import style from "./order.style.module.css";

export function Order(props) {
  const order = props.order;

  function getStatus(status) {
    switch(status) {
      case "pending": 
        return "Em aberto";
      case "in_progess":
        return "Em preparo";
      case "done":
        return "Pronto";
      default:
        return "Status desconhecido";
    }
  }

  function getNextStatus(status) {
    switch(status) {
      case "pending": 
      return "Em preparo";
      case "in_progess":
        return "Pronto";
      default:
        return "Status desconhecido";
    }
  }

  function handleClickChangeStatus() {
 
  }

  return (
    <>
      <div className={style.order}>
        <div className={style.contentProducts}>
          <div className={style.contentTitle}>
            <p className={style.name}>{order.client_name}</p>
            <p className={style.status}>{getStatus(order.status)}</p>
          </div>

          {order.Products.map((o) => {
              return (
                <>
                  <ProductOrder order={o} />
                </>
              )
            })}
          <div className={style.btnChangeStatus}>
            <Button blue onClick={handleClickChangeStatus}>
              {`Mover para ${getNextStatus(order.status)}`}
              &nbsp;&nbsp;&nbsp;
              <i class="bi bi-arrow-right-square"></i>
            </Button>
          </div> 
        </div>
      </div>
    </>
  );
}
