import React, { useEffect, useState, useContext } from 'react';
import "./Navbar.css";
import logo from "../../assets/logo.webp";
import cart_icon from "../../assets/cart_icon.png";
import { Link } from 'react-router-dom';
import { ShopContext } from '../views/home/ShopContext';
import { auth, db } from '../../../config/FirebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartItems } = useContext(ShopContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists() && userSnap.data().role === "admin") {
          setIsAdmin(true);
          console.log("✅ Admin logged in:", user.email);
        } else {
          setIsAdmin(false);
        }
      } else {
        setIsAdmin(false);
      }
    });

    return () => unsubscribe(); // cleanup on unmount
  }, []);

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="Logo" height="50px" />
        <p>Shopping World</p>
      </div>

      <ul className='nav-menu'>
        <li onClick={() => setMenu("home")}>
          <Link style={{ textDecoration: "none", color: "#626262" }} to="/">Home</Link>
          {menu === "home" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link style={{ textDecoration: "none", color: "#626262" }} to="/mens">Men</Link>
          {menu === "mens" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link style={{ textDecoration: "none", color: "#626262" }} to="/womens">Women</Link>
          {menu === "womens" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link style={{ textDecoration: "none", color: "#626262" }} to="/kids">Kids</Link>
          {menu === "kids" ? <hr /> : null}
        </li>

        {isAdmin && (
          <li onClick={() => setMenu("admin")}>
            <Link style={{ textDecoration: "none", color: "#626262" }} to="/admin/products">Admin</Link>
            {menu === "admin" ? <hr /> : null}
          </li>
        )}
      </ul>

      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="Cart" height="40px" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
