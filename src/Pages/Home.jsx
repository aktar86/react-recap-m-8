import React from "react";

import ProductsCard from "../components/ProductsCard/ProductsCard";
import useProducts from "../Hooks/useProduct";
import { Link } from "react-router";

const Home = () => {

  const {products, loading, error} = useProducts();

//   const furnitureData = useLoaderData();
    const furnitureDataSlice = products.slice(0, 6)
  return (
    <div className="py-10">
      <div className=" flex justify-between mb-2">
        <h1 className="font-bold text-2xl">Products Fetures</h1>
        <Link className="hover:underline" to='/products'>See All</Link>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {furnitureDataSlice.map((data) => (
          <ProductsCard key={data.id} data={data}></ProductsCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
