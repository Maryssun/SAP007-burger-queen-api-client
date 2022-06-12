import { useEffect, useState } from "react";
import { ProductList } from "../../components/ProductList";
import { getProducts } from "../../services/products.service";
import style from "./hall.style.module.css";

export function Hall() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    getProducts().then((produtos) => {
      setProduct(produtos || []);
    });
  }, []);

  return (
    <>
      <div className={style.hall}>
        <h1>Hall</h1>

        <ProductList products={products} onInput={console.log} />
      </div>
    </>
  );
}
