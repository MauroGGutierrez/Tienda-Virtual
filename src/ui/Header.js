import Form from "./Form";
import "./Header.css";
import MenuItems from "./MenuItems";

const Header = () => {
  const menuItems = [
    { link: "/carrito", name: "Carrito" },
    { link: "/login", name: "Login" }
  ];


  return (
    <div className="container">
      <nav className="header">
        <div className="menu-left">
          <h3>TiendaVirtual</h3>
          <Form/>
        </div>
        <MenuItems menuItems={menuItems}/>
      </nav>
    </div>
  )
};

export default Header;
