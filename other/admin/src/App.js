import "./app.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newPages/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newproduct/NewProduct";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Routes>
          <Route exact path="/">
          <Route path="/" element={<Home/>} />
          </Route>
          <Route path="/users" element={<UserList/>}>
          </Route>
          <Route path="/user/:userId" element={<User/>}>
          </Route>
          <Route path="/newUser" element={<NewUser/>}>
          </Route>
          <Route path="/products" element={<ProductList/>}>
          </Route>
          <Route path="/product/:productId" element={<Product/>}>
          </Route>
          <Route path="/newproduct" element={<NewProduct/>}>
          </Route>
        </Routes>  
      </div>
    </Router>
  );
}

export default App;
