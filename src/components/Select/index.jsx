import style from "./select.style.module.css";

export function Select(props) {

  return (
    <>
      <select
        name="setor"
        className={style.button}
        id={props.id}
        type={props.type}
        onChange={props.onChange}
      >
        <options></options>
      </select>
    </>
  );
}