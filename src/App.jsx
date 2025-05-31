import Navbar from "./components/layouts/Navbar"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Shop from "./components/pages/Shop"
import ShopCategory from "./components/pages/ShopCategory"
import Product from "./components/pages/Product"
import Cart from "./components/pages/Cart"
import LoginSignup from "./components/auth/LoginSignup"
import Footer from "./components/layouts/Footer"
import men_banner from "./assets/banner.jpg"
import women_banner from "./assets/women_banner.avif"
import kids_banner from "./assets/kids_banner.jpg"
import Admin from './components/views/home/Admin';

function App() {
 
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/mens" element={<ShopCategory banner={men_banner} category="men"/> }/>
        <Route path="/womens" element={<ShopCategory banner={women_banner}category="women"/>}/>
        <Route path="/kids" element={<ShopCategory banner={kids_banner}category="kid"/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/product/:productId" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<LoginSignup/>}/>
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer/>
      </BrowserRouter>

    </div>
     
  )
}

export default App
