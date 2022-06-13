import { putOrders } from "../../services/orders.service";
import { Button } from "../Button";
import { ProductOrder } from "../ProductOrder";
import style from "./order.style.module.css";

export function Order(props) {
  const order = props.order;

  function getStatusName(status) {
    switch (status) {
      case "pending":
        return "Em aberto";
      case "in_progress":
        return "Em preparo";
      case "done":
        return "Pronto";
      default:
        return "pending";
    }
  }

  function getNextStatus(status, fromRequest = false) {
    switch (status) {
      case "pending":
        return fromRequest ? "in_progress" : "Em preparo";
      case "in_progress":
        return fromRequest ? "done" : "Pronto";
      default:
        return fromRequest ? "pending" : "Em aberto";
    }
  }

  function handleClickChangeStatus() {
    const nextStatus = getNextStatus(order.status, true);

    const params = {
      orderId: order.id,
      status: nextStatus,
    };

    putOrders(params).finally(() => {
      if (props.onClick) {
        props.onClick(nextStatus);
      }
    });
  }

  return (
    <>
      <div className={style.order}>
        <div className={style.contentProducts}>
          <div className={style.contentTitle}>
            <p className={style.name}>{order.client_name}</p>
            <p className={style.status}>{getStatusName(order.status)}</p>
          </div>

          {order.Products.map((productOrder, index) => {
            return (
              <>
                <ProductOrder key={index} order={productOrder} />
              </>
            );
          })}

          {order.status !== "done" && (
            <div className={style.btnChangeStatus}>
              <Button blue={true} onClick={handleClickChangeStatus}>
                {`Mover para ${getNextStatus(order.status)}`}
                &nbsp;&nbsp;&nbsp;
                <i className="bi bi-arrow-right-square"></i>
              </Button>
            </div>
          )}

          {order.status === "done" && (
            <div className={style.btnChangeStatus}>
              <p className={style.done}>{`Finalizado em ${new Date(order.updatedAt).toLocaleString()}`}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
