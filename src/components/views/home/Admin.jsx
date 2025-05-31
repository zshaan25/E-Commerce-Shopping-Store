import React, { useState, useEffect } from "react";
import { db } from "../../../../config/FirebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    new_price: "",
    old_price: "",
    image: "",
    category: "",
    stock: "",
  });
  const [editId, setEditId] = useState(null);

  const fetchProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const items = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setProducts(items);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await updateDoc(doc(db, "products", editId), {
        ...form,
        new_price: Number(form.new_price),
        old_price: Number(form.old_price),
        stock: Number(form.stock),
      });
      setEditId(null);
    } else {
      await addDoc(collection(db, "products"), {
        ...form,
        new_price: Number(form.new_price),
        old_price: Number(form.old_price),
        stock: Number(form.stock),
      });
    }
    setForm({ name: "", new_price: "", old_price: "", image: "", category: "", stock: "" });
    fetchProducts();
  };

  const handleEdit = (product) => {
    setForm({ ...product });
    setEditId(product.id);
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "products", id));
    fetchProducts();
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Admin Product Manager</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Product Name" required />
        <input name="new_price" value={form.new_price} onChange={handleChange} placeholder="New Price" required />
        <input name="old_price" value={form.old_price} onChange={handleChange} placeholder="Old Price" />
        <input name="image" value={form.image} onChange={handleChange} placeholder="Image URL" />
        <input name="category" value={form.category} onChange={handleChange} placeholder="Category" />
        <input name="stock" value={form.stock} onChange={handleChange} placeholder="Stock Quantity" />
        <button type="submit">{editId ? "Update Product" : "Add Product"}</button>
      </form>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price (New)</th>
            <th>Price (Old)</th>
            <th>Category</th>
            <th>Stock</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => (
            <tr key={prod.id}>
              <td>{prod.name}</td>
              <td>${prod.new_price}</td>
              <td>${prod.old_price}</td>
              <td>{prod.category}</td>
              <td>{prod.stock}</td>
              <td><img src={prod.image} alt={prod.name} width="50" /></td>
              <td>
                <button onClick={() => handleEdit(prod)}>Edit</button>
                <button onClick={() => handleDelete(prod.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
