import style from "./select.style.module.css";

export function Select(props) {

  const options = props.options || [];

  return (
    <>
      <select name={props.name} className={style.select} onChange={props.onChange}>
        {
          options.map((item, index) => {
            return <option ket={index} value={item.value} selected={item.selected} disabled={item.disabled}>{item.text}</option>
          })
        }
      </select>
    </>
  );
}
