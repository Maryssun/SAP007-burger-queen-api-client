import { useEffect, useState } from "react";
import { Product } from "../../components/Product";
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

        <div className={style.content}>
          {products?.map((produto) => {
            return <Product produto={produto} />;
          })}
        </div>
      </div>
    </>
  );
}
