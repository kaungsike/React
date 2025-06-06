import Button from "../components/Button";

export default async function Page({ params, searchParams }) {

  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()

  console.log("Kaung Sike");

  return (<div>
    <h1>Products <Button/></h1>
    <ul>
      {data.map((product) => (
        <li key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <img src={product.image} alt={product.title} style={{ width: '100px' }} />
        </li>
      ))}
    </ul>
  </div>);

}
