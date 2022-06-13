import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AppMenu } from "../../components/AppMenu";
import { PrincipalMenuOrder } from "../../components/PrincipalMenuOrder";
import { OrderList } from "../../components/OrderList";
import { getOrders } from "../../services/orders.service";
import style from "./kitchen.style.module.css";

export function Kitchen() {

  const { state } = useLocation();
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState("pending");
  
  useEffect(() => {
    getOrders().then((orders) => {
      const ordersFiltered = orders.filter((order) => {
        return order.client_name?.includes("SistemaBurgerQueen_");
      });
      
      const ordersMaped = ordersFiltered.map((order) => {
        order.client_name = order.client_name.substr(19);
        return order;
      });
      
      setOrders(ordersMaped);
      console.log(ordersMaped)
    })
  }, [status]);

  function handleClickPrincipalMenu(menu) {
    setStatus(menu.status);
  }

  function handleOnClickOrderList(nextStatus) {
    setStatus(nextStatus);
  }

  return (
    <>
      <div className={style.kitchen}>
        <AppMenu userName={state.name} />
        <PrincipalMenuOrder onClick={handleClickPrincipalMenu} menu={status} />
        <OrderList orders={orders} status={status} onClick={handleOnClickOrderList} />
      </div>
    </>
  );
}
