import { HashRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import BookDetails from "./components/BookDetails";
import Header from "./components/Header";
import Admin from "./pages/Admin";
import Cart from "./pages/Cart";
import CategoryList from "./pages/CategoryList";
import Edit from "./pages/Edit";
import Login from "./pages/Login";
import MyProfile from "./pages/MyProfile";
import Register from "./pages/Register";
import Shop from "./pages/Shop";

function App() {

  
  return (
    <div className="App">
      <HashRouter>
      <Header/>

        <Routes>
          <Route index  element={<Shop/>} />
          <Route path='login' element={<Login/>} />
          <Route path='admin' element={<Admin/>} />
          <Route path='myprofile' element={<MyProfile/>} />
          <Route path='register' element={<Register/>} />
          <Route path='cart' element={<Cart/>} />
          <Route path='edit/:id' element={<Edit/>} />
          <Route path='category' element={<CategoryList/>} />
          <Route path='addproduct' element={<AddProduct/>} />
          <Route path=':id' element={<BookDetails/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
