import { useEffect, useState } from "react";
import { Order } from "../Order";
import style from "./orderList.style.module.css";

export function OrderList(props) {
  const [orders, setOrders] = useState(props.orders);

  useEffect(() => {
    setOrders(() => {
      return props.orders.filter((o) => o.status === props.status);
    });
  }, [props.status, props.orders]);

  function handleOnClickNextStatus(nextStatus) {
    if(props.onClick) {
      props.onClick(nextStatus);
    }
  }

  return (
    <>
      <div className={style.orderList}>
        {(orders || []).map((order, index) => {
          return (
            <>
              <Order key={index + props.status} order={order} onClick={handleOnClickNextStatus} />
            </>
          );
        })}

        {orders.length <= 0 && (
          <p className={style.noOrders}>Não há pedidos por aqui!</p>
        )}
      </div>
    </>
  );
}
