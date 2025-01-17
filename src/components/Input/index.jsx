import { Error } from "./../Error";
import style from "./input.style.module.css";

export function Input(props) {
  return (
    <>
      {props.label && <label>{props.label}</label>}
      <input
        className={style.input}
        placeholder={props.placeholder}
        type={props.type || "text"}
        onInput={props.onInput}
        required={props.required}
      />
      {props.error && <Error message={props.msgError} />}
    </>
  );
}
