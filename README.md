# 🛒 E-Commerce Web Application

This is a React-based E-Commerce website developed as part of a Web Engineering course. It integrates **Firebase Firestore** for real-time CRUD operations and **Firebase Authentication** for secure login/signup with role-based access control.

## 🔗 Live Demo
[👉 Click here to view the deployed project](https://your-app-id.web.app)

---

## 📁 Project Features

### 👨‍💻 User Features
- User registration & login (Email/Password + Google)
- Browse product catalog
- Product detail view
- Add/remove from cart
- Checkout page with order summary
- View order history & order status

### 🛠️ Admin Features
- Secure Admin Login
- Add/Edit/Delete products
- Manage stock
- Update order statuses

---

## 🔧 Firebase Integration

### 1. 🔐 Authentication
- Firebase Auth with email/password and Google Sign-In.
- Role is saved in Firestore (`users` collection) after signup.
- Role determines access to admin features using conditional rendering.

### 2. 💾 Firestore (CRUD Operations)

#### Product Collection
| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Product name |
| `price` | number | Product price |
| `imageUrl` | string | Image path or URL |
| `description` | string | Product details |
| `stock` | number | Available quantity |

#### Operations
- **Create**: Admins can add products via a form.
- **Read**: All users can view products (real-time sync with Firestore).
- **Update**: Admins can edit any product.
- **Delete**: Admins can remove products.

---

## 🔑 Role Management

- After user signup, role is stored in Firestore (`users` collection).
- Roles used:
  - `admin`: Full access to product and order management.
  - `user`: Can browse, add to cart, and place orders.

### 🔁 How it's enforced:
- On login, user role is fetched from Firestore.
- Components/pages are conditionally rendered based on role.
- Admin-only actions (like deleting a product) are hidden from normal users.

---

## 🧪 Admin Credentials (for testing)

