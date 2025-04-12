export default function App() {
  const title = "Hello Vite + React!";
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  return (
    <div className="p-5">
      <p>{title}</p>
      <div className="flex gap-3">
        {categories.map((category) => (
          <button
            key={category}
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded "
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
