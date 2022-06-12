import { useEffect, useState } from "react";
import { Product } from "../Product";
import style from "./productList.style.module.css";

export function ProductList(props) {

  const [products, setProducts] = useState(props.products);

  useEffect(() => {
    setProducts(() => {
      return props.products.filter(p => p.type === props.typeMenu)
    });
  }, [props.typeMenu, props.products])

  function handleInputProduct(id, quantidade) {
    products.forEach((p) => {
      if (p.id === id) {
        p.quantidade = quantidade;
      }
    });
    
    if (props.onInput) {
      props.onInput(products);
    }
  }

  return (
    <>
      <div className={style.productList}>
        {(products || []).map((product, index) => {
          return (
            <Product
              key={index}
              product={product}
              onInput={(quantidade) => handleInputProduct(product.id, quantidade)}
            />
          );
        })}
      </div>
    </>
  );
}
