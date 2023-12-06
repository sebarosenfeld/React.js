import { useState } from "react"

export const ItemCounter = ({onAdd, stock, initial}) => {
    const [count, setCount] = useState(initial)
    
    const handleDecreaseCount = () => {
        if(count > 1){
            setCount(prev => prev - 1)
        }
    }
    
    const handleIncreaseCount = () => {
        if(stock > count){
            setCount(prev => prev + 1)
        }
    }

    const handleAdd = () => {
        onAdd(count)
        setCount(initial)
        alert("Has añadido el producto al carrito")
    }

    return (
        <> 
            <div className="mt-2" style={{display: "flex"}}>
                <div className="me-2" onClick={handleDecreaseCount}>
                    -
                </div>
                <mark>{count}</mark>
                <div className="ms-2" onClick={handleIncreaseCount}>
                    +
                </div>
            </div>
            <button className="mt-2" onClick={handleAdd}>
                Agregar al carrito
            </button>
        </>
    )
}