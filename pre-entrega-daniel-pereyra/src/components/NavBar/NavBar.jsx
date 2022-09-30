import "./NavBar.css"
import { CartWidget } from "../CartWidget/CartWidget"


export const NavBar =() => {
    return (
<nav className="menu">
        <img className="logo" src="https://i.pinimg.com/originals/28/f1/a9/28f1a972e13e4281b5273891ead173eb.jpg" alt="logo"/>
        <ul className="listaMenu">
            <li><a href="#">inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Categorias</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>
        <CartWidget/>

</nav>
    )
}