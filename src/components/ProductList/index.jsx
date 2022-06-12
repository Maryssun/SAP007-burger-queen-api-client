import { Product } from "../Product";
import style from "./productList.style.module.css";

export function ProductList(props) {

  function handleInputProduct(id, quantidade) {
    props.products.forEach((p) => {
      if (p.id === id) {
        p.quantidade = quantidade;
      }
    });
    
    if (props.onInput) {
      props.onInput(props.products);
    }
  }

  return (
    <>
      <div className={style.productList}>
        {(props.products || []).map((product, index) => {
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
