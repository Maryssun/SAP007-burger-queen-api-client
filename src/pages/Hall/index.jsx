import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AppMenu } from "../../components/AppMenu";
import { Client } from "../../components/Client";
import { PrincipalMenu } from "../../components/PrincipalMenu";
import { ProductList } from "../../components/ProductList";
import { postOrders } from "../../services/orders.service";
import { getProducts } from "../../services/products.service";
import style from "./hall.style.module.css";

export function Hall() {

  const { state } = useLocation();
  const [products, setProducts] = useState([]);
  const [productsSelected, setProductsSelected] = useState([]);
  const [typeMenu, setTypeMenu] = useState("all-day");

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products || []);
    });
  }, []);

  function handleClickPrincipalMenu(menu) {
    setTypeMenu(menu.type);
  }

  async function handleClickAddOrder(client) {
    const products = productsSelected.map(product => {
      return ({
        id: product.id,
        qtd: product.quantidade
      });
    });

    if (productsSelected.length > 0) {
      const bodyParams = {
        client: `Mesa ${client}`,
        table: parseInt(client),
        products: products,
      };

      postOrders(bodyParams).then(finishOrder);
    }
  }

  function handleClickShowOrder(client) {
    console.log(client, typeMenu, productsSelected)
  }

  function handleOnInputProductsSelected(order) {
    setProductsSelected(order);
  }

  function finishOrder(response) {
    if(response.id) {
      alert(`Pedido enviado à cozinha (nº ${response.id})`);
    }
    else {
      alert(`Houve um problema, tente novamente`);
    }
  }

  return (
    <>
      <div className={style.hall}>
        <AppMenu userName={state.name} />
        <Client onClickAddOrder={handleClickAddOrder} onClickShowOrder={handleClickShowOrder} />
        <PrincipalMenu onClick={handleClickPrincipalMenu} menu={typeMenu} />
        <ProductList products={products} typeMenu={typeMenu} onInput={handleOnInputProductsSelected} />
      </div>
    </>
  );
}
