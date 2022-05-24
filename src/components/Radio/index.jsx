import style from "./radio.style.module.css";

export function Radio(props) {
  return (
    <>
    {props.label && <label>{props.label}</label>}
    <input
        className={style.radio}
        type={props.type || "radio"}
        onInput={props.onInput} />
</>
  )
}





