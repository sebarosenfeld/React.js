import { useContext, useState } from "react"
import { Container, Table, Button, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { getFirestore, collection, addDoc } from "firebase/firestore"

import { CartContext } from "../Contexts/CartContext"

const initialValues = {
    name: "",
    phone: "",
    email: "",
}

export const Cart = () => {
    const {clear, items, onRemove} = useContext(CartContext);
    
    const [ buyer, setBuyer] = useState(initialValues);
    
    const navigate = useNavigate();

    const total = items.reduce((acumulador, valorActual) => acumulador + valorActual.quantity * valorActual.price, 0);

    const handleChange = (event) =>{
        setBuyer (buyer => {
            return {
                ...buyer,
                [event.target.name]: event.target.value,
            }
        })
    }

    const sendOrder = (ev) => {
        ev.preventDefault();

        const order = {
            buyer,
            items,
            total: 1,
        };

        const db = getFirestore();
        const orderCollection = collection(db, "items");

        addDoc(orderCollection, order).then(({id}) => {
            if (id) {
                alert("su orden: " + id + " ha sido completada!");
                setBuyer(initialValues);
                clear();
            }
        });
    };

    if(!items.length) {
        return (
            <Container className="mt-4">
                <h1>No hay productos agregados al carrito</h1>
                <button className="mt-2" onClick={() => navigate ("/")}>Volver al home</button>
            </Container>
        )
    }

    return (
    <Container className="mt-4">
        <h1>Carrito</h1>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio por unidad</th>
          <th>Imagen</th>
          <th>Cantidad</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {items?.map((item) => (
            <tr key= {item.id}>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td><img src={item.pictureUrl} alt="imagenProducto" width={300}/></td>
                <td>{item.quantity}</td>
                <td onClick={() => onRemove(item.id)}>x</td>
            </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
            <th>Total: {total} </th>
        </tr>
      </tfoot>
    </Table>
        <button onClick={clear}>Vaciar carrito</button>
        <Form>
      <Form.Group className="mb-3">
        <Form.Label className="mt-3">Email address</Form.Label>
        <Form.Control
        type="text"
        value={buyer.email}
        onChange={handleChange}
        name="email"
        required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
        type="text"
        value={buyer.name}
        onChange={handleChange}
        name="name"
        required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Phone</Form.Label>
        <Form.Control
        type="text"
        value={buyer.phone}
        onChange={handleChange}
        name="phone"
        required
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={sendOrder}>
        Enviar
      </Button>
    </Form>
    </Container>
    )
} 