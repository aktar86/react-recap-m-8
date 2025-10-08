import React, { useState } from "react";
import useProducts from "../Hooks/useProduct";
import ProductsCard from "../components/ProductsCard/ProductsCard";

const Products = () => {
  const { products, loadign, error } = useProducts();
  const [search, setSearch] = useState("");
  const trim = search.trim().toLowerCase();
  const searchedProducts = trim
    ? products.filter((product) => product.name.toLowerCase().includes(trim))
    : products;



  return (
    <div className="py-10">
      <div className=" flex justify-between mb-2">
        <h1 className="font-bold text-2xl">
          Products Fetures{" "}
          <span className="text-sm font-medium">
            ({searchedProducts.length}) Products Available
          </span>{" "}
        </h1>

        <label className="floating-label">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="mail@site.com"
            className="input input-md"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {searchedProducts.map((data) => (
          <ProductsCard key={data.id} data={data}></ProductsCard>
        ))}
      </div>
    </div>
  );
};

export default Products;




      // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      //   {searchedProducts.length > 0 ? (
      //     searchedProducts.map((data) => (
      //       <ProductsCard key={data.id} data={data}></ProductsCard>
      //     ))
      //   ) : (
      //     <div className="col-span-full text-center py-10">
      //       <p className="text-xl text-gray-500">Product not found</p>
      //       <p className="text-sm text-gray-400 mt-2">
      //         No products match your search "{search}"
      //       </p>
      //     </div>
      //   )}
      // </div>



