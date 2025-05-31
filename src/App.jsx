import Navbar from "./components/layouts/Navbar"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Shop from "./components/Pages/Shop"
import ShopCategory from "./components/Pages/ShopCategory"
import Product from "./components/Pages/Product"
import Cart from "./components/Pages/Cart"
import LoginSignup from "./components/auth/LoginSignup"
import Footer from "./components/layouts/Footer"
import men_banner from "./assets/banner.jpg"
import women_banner from "./assets/women_banner.avif"
import kids_banner from "./assets/kids_banner.jpg"
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
      </Routes>
      <Footer/>
      </BrowserRouter>

    </div>
     
  )
}

export default App
