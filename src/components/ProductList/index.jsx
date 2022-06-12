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
    const m = props.products.map((p) => {
      if (p.id === id) {
        p.quantidade = quantidade;
        return p;
      }
      else if(p.quantidade > 0) {
        return p;
      }
      return {};
    });
    
    if (props.onInput) {
      const productsFiltered = m.filter(p => Boolean(p?.quantidade) );
      props.onInput(productsFiltered);
    }
  }

  return (
    <>
      <div className={style.productList}>
        {(products || []).map((product, index) => {
          return (
            <Product
              key={index + props.typeMenu}
              product={product}
              onInput={(quantidade) => handleInputProduct(product.id, quantidade)}
            />
          );
        })}
      </div>
    </>
  );
}
