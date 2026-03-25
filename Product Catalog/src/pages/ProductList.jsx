import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import "./productList.css";

export default function ProductList() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const filteredProducts = products.filter((p) => {
    return (
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "" || p.category === category)
    );
  });

  const categories = [...new Set(products.map(p => p.category))];

  return (
    <div className="container">

      {/* 🔍 Controls */}
      <div className="controls">
        <input
          type="text"
          placeholder="Search products..."
          className="search-input"
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="filter-select"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((cat, i) => (
            <option key={i}>{cat}</option>
          ))}
        </select>
      </div>

      {/* 🧾 Grid */}
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">

            {/* 🏷 Badge */}
            <span className="badge">{product.badge}</span>

            {/* 🖼 Image */}
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />

            <div className="product-content">
              <h2 className="product-title">{product.name}</h2>

              <p className="product-category">{product.category}</p>

              {/* ⭐ Rating */}
              <div className="rating">
                {"★".repeat(Math.round(product.rating))}
              </div>

              <p className="product-price">${product.price}</p>

              <Link
                to={`/products/${product.id}`}
                className="product-button"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}