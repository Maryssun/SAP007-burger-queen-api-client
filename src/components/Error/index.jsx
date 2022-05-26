import style from "./error.style.module.css";

export function Error(props) {

  return (
    <div className={style.error}>{props.message || props.children}</div>
  );
}
