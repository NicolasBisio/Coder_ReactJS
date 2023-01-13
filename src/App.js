import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/Cart/Cart"
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";
import './App.css';
import "./components/CartWidget/CartWidget.css";
import "./components/NavBar/NavBar.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotFound from './components/NotFound/NotFound';
import ShopProvider from './context/ShopProvider';

function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />}></Route>
          <Route path="/category/:categoryId" element={<ItemListContainer />}></Route>
          <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </ShopProvider>
  );
}

export default App;
