import { Link } from "react-router-dom";
import style from "./appMenu.style.module.css";

export function AppMenu(props) {

  return (
    <>
      <nav className={style.nav}>
        <p className={style.nomeUsuario}>{props.userName}</p>
        <p className={style.nomeApp}>{"Burger Queen"}</p>
        <Link to="/" className={style.sair}>Sair</Link>
      </nav>
    </>
  );
}
