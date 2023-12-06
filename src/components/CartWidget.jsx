import { Link } from "react-router-dom"
import carrito from "../assets/carrito.png"
import { useContext } from "react"
import { CartContext } from "../Contexts/CartContext"

export const CartWidget = () => {
    const { items } = useContext(CartContext);
    
    const total = items.reduce((acumulador, valorActual) => acumulador + valorActual.quantity, 0);

    return (
        <Link to="/cart">
            <img src={carrito} alt="changuito" width={30}/>
            <span className="span ms-2">{total}</span>
        </Link>
    )
}