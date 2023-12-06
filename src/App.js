import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { CartProvider } from './Contexts/CartContext';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';
import { ItemDetailContainer } from './components/ItemDetailContainer'; 
import { Error404 } from './components/Error404';
import { Welcome } from './components/Welcome';
import { Cart } from './components/Cart';
// import { Footer } from './components/footer';

import "./App.css";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Welcome/>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Productos"/>} />
          <Route path='/category/:id' element={<ItemListContainer greeting="Productos"/>} />
          <Route path="/items/:id" element={<ItemDetailContainer greeting="Producto" />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="*" element={<Error404/>} />
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
