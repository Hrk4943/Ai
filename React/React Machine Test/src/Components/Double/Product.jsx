import React, { useState } from "react";
import PriceRangeSlider from "./Slider";

const ProductFilter = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 20 },
    { id: 2, name: "Product 2", price: 50 },
    { id: 3, name: "Product 3", price: 70 },
    { id: 4, name: "Product 4", price: 90 },
  ]);

  const [filteredProducts, setFilteredProducts] = useState(products);

  return (
    <div className="flex justify-center items-center h-screen">
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-8 text-center">Product Filter</h1>
      <PriceRangeSlider
        products={products}
        setFilteredProducts={setFilteredProducts}
      />

      <h2 className="text-xl font-bold mt-4 text-center">Filtered Products:</h2>
      <div className="flex justify-center mt-5">
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
  );
};

export default ProductFilter;
