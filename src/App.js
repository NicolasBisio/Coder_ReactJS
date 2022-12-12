import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import './App.css';
import "./components/CartWidget/CartWidget.css";
import "./components/NavBar/NavBar.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />}></Route>
        <Route path="/category/:categoryId" element={<ItemListContainer />}></Route>
        <Route path="/item/:itemId" element={<ItemDetailContainer/>}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
