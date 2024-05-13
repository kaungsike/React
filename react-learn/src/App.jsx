import Ks from "./Kss";

const App = () => {
  const headingStyle = {
    color: "black",
    backgroundColor: "pink",
    fontFamily: "Impact",
    padding : "20px"
  };
  return (
    <div className="border border-gray-600 m-5 p-5">
      <h1 className="font-serif font-bold text-3xl underline mb-5">Hello React</h1>
      <p className="mb-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
        officiis assumenda magni dignissimos nihil tenetur qui atque! Labore
        omnis, quas sint dolore, voluptatibus porro blanditiis maiores ab itaque
        amet nisi.
      </p>
      <button className="bg-gray-600 text-white px-4 py-1">Click Me</button>
    </div>
  );
};

export default App;
