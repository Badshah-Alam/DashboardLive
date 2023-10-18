import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="product-container">
      <p>This is the product page</p>
      <Link to="/" className="dashboard-link">
        Go to Dashboard page
      </Link>
    </div>
  );
};

export default Product;
