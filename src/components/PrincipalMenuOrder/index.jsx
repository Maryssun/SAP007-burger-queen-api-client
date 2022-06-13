import style from "./principalMenuOrder.style.module.css";

export function PrincipalMenuOrder(props) {
  const menus = [
    { name: "Em aberto", type: "pending" },
    { name: "Em preparo", type: "in_prepare" },
    { name: "Pronto", type: "done" }
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
