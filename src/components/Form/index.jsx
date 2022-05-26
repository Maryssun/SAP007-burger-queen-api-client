import style from "./form.style.module.css";

export function Form(props) {

  function handleOnSubmit(event) {
    event.preventDefault();
    if (props.onSubmit) {
      props.onSubmit();
    }
  }

  return (
    <form
      className={style.form}
      id={props.id}
      name={props.name}
      onSubmit={handleOnSubmit}
    >
      {props.children}
    </form>
  );
}
