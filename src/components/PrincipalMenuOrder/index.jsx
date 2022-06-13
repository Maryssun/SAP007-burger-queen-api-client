import style from "./principalMenuOrder.style.module.css";

export function PrincipalMenuOrder(props) {
  const menus = [
    { name: "Em aberto", status: "pending" },
    { name: "Em preparo", status: "in_progress" },
    { name: "Pronto", status: "done" }
  ];

  function handleClickMenu(menu) {
    if (props.onClick) {
      props.onClick(menu);
    }
  }

  return (
    <>
      <nav className={style.nav}>
        {menus.map((menu, index) => {
          return (
            <span key={index} className={style.itemMenu} data-active={props.menu} onClick={() => handleClickMenu(menu)}>
              {menu.name}
            </span>
          );
        })}
      </nav>
    </>
  );
}
