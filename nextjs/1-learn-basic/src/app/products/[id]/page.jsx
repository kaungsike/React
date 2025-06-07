import Image from "next/image";
import React from "react";

const Page = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`https://dummyjson.com/products/${id}`);

  const json = await res.json();

  console.log(json);

  return (
    <div>
      <p>Product - {id} detail</p>
      <div className="border p-4 rounded-lg">
        <h4>{json.title}</h4>
        <p className="mb-2">Price: ${json.price}</p>
        <p>{json.description}</p>
        <Image
          src={json.thumbnail}
          alt={json.title}
          width={300}
          height={300}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Page;
