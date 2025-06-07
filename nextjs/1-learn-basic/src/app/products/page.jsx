import Link from "next/link";
import React from "react";

const fetchProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const json = await res.json();
  return json;
};

const Page = async () => {
  const products = await fetchProducts();

  console.log(products);

  return (
    <div>
      <h3>Products</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg">
            <h4>{product.title}</h4>
            <p className="mb-2">Price: ${product.price}</p>
            <Link href={`/products/${product.id}`} className="border px-6 py-2">
              See More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
