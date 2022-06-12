import style from "./button.style.module.css";

export function Button(props) {
  return (
    <>
      <button
        className={props.gold ? style.buttonGold : style.button}
        id={props.id} 
        type={props.type || "button"}
        onClick={props.onClick}>  
        {props.children}
      </button>
    </>
  );
}
