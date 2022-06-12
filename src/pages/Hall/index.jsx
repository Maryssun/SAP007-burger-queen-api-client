import { useEffect, useState } from "react";
import { AppMenu } from "../../components/AppMenu";
import { Client } from "../../components/Client";
import { PrincipalMenu } from "../../components/PrincipalMenu";
import { ProductList } from "../../components/ProductList";
import { getProducts } from "../../services/products.service";
import style from "./hall.style.module.css";

export function Hall() {
  const [products, setProduct] = useState([]);
  const [productsSelected, setProductsSelected] = useState([]);
  const [typeMenu, setTypeMenu] = useState("all-day");

  useEffect(() => {
    getProducts().then((produtos) => {
      setProduct(produtos || []);
    });
  }, []);

  function handleClickPrincipalMenu(menu) {
    setTypeMenu(menu.type);
  }

  function handleClickAddOrder(client) {
    console.log(client, typeMenu, productsSelected)
  }
  
  function handleClickShowOrder(client) {
    console.log(client, typeMenu, productsSelected)
  }

  function handleOnInputProductsSelected(order) {
    setProductsSelected(order)
  }

  return (
    <>
      <div className={style.hall}>
        <AppMenu />
        <Client onClickAddOrder={handleClickAddOrder} onClickShowOrder={handleClickShowOrder} />
        <PrincipalMenu onClick={handleClickPrincipalMenu} menu={typeMenu} />
        <ProductList products={products} typeMenu={typeMenu} onInput={handleOnInputProductsSelected} />
      </div>
    </>
  );
}
