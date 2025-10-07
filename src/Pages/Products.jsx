import React from "react";
import useProducts from "../Hooks/useProduct";
import ProductsCard from "../components/ProductsCard/ProductsCard";

const Products = () => {
  const { products, loadign, error } = useProducts();
  return (
    <div className="py-10">
      <div className=" flex justify-between mb-2">
        <h1 className="font-bold text-2xl">Products Fetures</h1>
        <button className="btn">Search</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((data) => (
          <ProductsCard key={data.id} data={data}></ProductsCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
