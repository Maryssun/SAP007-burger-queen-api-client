import style from "./button.style.module.css";

export function Button(props) {
  let style_ = style.button;
  
  if(props.gold) {
    style_ = style.buttonGold;
  }
  else if(props.white) {
    style_ = style.buttonWhite;
  }
  else if(props.blue) {
    style_ = style.buttonBlue;
  }

  return (
    <>
      <button
        className={style_}
        id={props.id} 
        type={props.type || "button"}
        disabled={props.disabled}
        onClick={props.onClick}>  
        {props.children}
      </button>
    </>
  );
}
