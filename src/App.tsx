import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

/* Pages */
import { HomePage } from "./components/pages/01_HomePage";
import { AboutUs } from "./components/pages/02_AboutUs";
import { Projects } from "./components/pages/03_Projects";
import { ContactUs } from "./components/pages/05_ContactUs";
import { LatestNews } from "./components/pages/06_LatestNews";
import LoginPage from "./components/pages/LoginPage";
import {
  createProduct,
  getProducts,
  removeProduct,
  updateProduct,
} from "./services/product";
import { TProduct } from "./interfaces/TProducts";
import AdminLayout from "./components/elements/AdminLayout";
import Dashboard from "./components/pages/admin/Dashboard";
import ProductAdd from "./components/pages/admin/ProductAdd";
import ProductEdit from "./components/pages/admin/ProductEdit";

function App() {
  const [products, setProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("lỗi không nhận được dữ liệu:", error);
      }
    };

    fetchData();
  }, []);

  const handleAddProduct = async (product: TProduct) => {
    try {
      const newProduct = await createProduct(product);
      setProducts([...products, newProduct]);
    } catch (error) {
      console.error("Lỗi thêm sản phẩm:", error);
    }
  };

  const handleEditProduct = async (product: TProduct) => {
    try {
      const p = await updateProduct(product);
      setProducts((prevProducts) =>
        prevProducts.map((i) => (i.id === p.id ? p : i))
      );
    } catch (error) {
      console.error("Error editing product:", error);
    }
  };

  const handleDeleteProduct = async (id: number | undefined) => {
    try {
      const isConfirm = window.confirm("Are you sure?");
      if (isConfirm) {
        await removeProduct(`${id}`);
        setProducts((prevProducts) => prevProducts.filter((i) => i.id !== id));
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/news" element={<LatestNews />} />
        <Route path="/login" element={<LoginPage />} />

        {/* phía admin */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route
            path="/dashboard"
            element={
              <Dashboard products={products} onDel={handleDeleteProduct} />
            }
          />
          <Route
            path="admin/add"
            element={<ProductAdd onAdd={handleAddProduct} />}
          />
          <Route
            path="admin/edit/:id"
            element={<ProductEdit onEdit={handleEditProduct} />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
