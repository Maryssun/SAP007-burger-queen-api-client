import style from "./principalMenu.style.module.css";

export function PrincipalMenu(props) {
  const menus = [
    { name: "Todos Horários", type: "all-day" },
    { name: "Café da Manhã", type: "breakfast" }
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
