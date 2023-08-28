import NavMenu from "./NavMenu";
const Nav = () => {
  function toggle() {
    let menu = document.getElementsByClassName("mobile-menu");
    menu = menu[0];
    if (menu.style.display == "flex") {
      menu.style.display = "none";
    } else {
      menu.style.display = "flex";
    }
  }
  return (
    <nav className="nav__bar">
      <h3 className="initial">Arjun.</h3>
      <i className="fa-solid fa-bars menu-icon" onClick={toggle}></i>
      <NavMenu className="nav-list" />
      <NavMenu className="mobile-menu" />
    </nav>
  );
};
export default Nav;
