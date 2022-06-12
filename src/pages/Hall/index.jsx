import { useEffect, useState } from "react";
import { PrincipalMenu } from "../../components/PrincipalMenu";
import { ProductList } from "../../components/ProductList";
import { getProducts } from "../../services/products.service";
import style from "./hall.style.module.css";

export function Hall() {
  const [products, setProduct] = useState([]);
  const [typeMenu, setTypeMenu] = useState("all-day");

  useEffect(() => {
    getProducts().then((produtos) => {
      setProduct(produtos || []);
    });
  }, []);

  function handleClickPrincipalMenu(menu) {
    setTypeMenu(menu.type);
  }

  return (
    <>
      <div className={style.hall}>
        <PrincipalMenu onClick={handleClickPrincipalMenu} menu={typeMenu} />
        <ProductList products={products} typeMenu={typeMenu} onInput={console.log} />
      </div>
    </>
  );
}
