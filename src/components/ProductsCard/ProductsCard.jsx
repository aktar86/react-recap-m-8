import React from "react";

const ProductsCard = ({ data }) => {
  const { name, image, material, price, description, category } = data;
  return (
    <div className="flex flex-col border-2 border-gray-300 overflow-hidden rounded-lg shadow-sm space-y-2">
      <img
        className="w-full h-64 object-cover"
        src={image}
        alt="furniture image"
      />
      <div className="p-2">
        <h2 className="font-bold text-2xl">{name}</h2>
        <p>{description}</p>
        <p>Materials: {material}</p>
      </div>
      <div className="flex flex-1 justify-between items-center p-2">
        <p>Catagory: {category}</p>
        <p>Price: ${price}</p>
      </div>
      <div className="flex justify-center items-center p-2">
        <button className="btn bg-blue-500 text-white outline-0 border-0 rounded-4xl w-full ">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductsCard;
