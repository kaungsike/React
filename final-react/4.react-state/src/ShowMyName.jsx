import React from "react";

const ShowMyName = () => {

    const [name, setName] = React.useState("...");
    const handleMg = () => {
        console.log("Mg");
        setName("Mg Kaung Sike");
    }

    // const handleKaung = () => {
    //     console.log("Kaung");
    //     setName("Kaung");
    // }

    // const handleSike = () => {
    //     console.log("Sike");
    //     setName("Sike");
    // }

    const handleClear = () => {
        setName("...");
    }

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full gap-5">
      <h1 className="text-5xl font-bold">My name is : {name}</h1>
      <div className="flex gap-5">
        <button
        onClick={handleMg}
          className="border border-black px-6 py-2 rounded active:scale-95 duration-150"
        >
          Show
        </button>
        <button
        onClick={handleClear}
          className="border border-black px-6 py-2 rounded active:scale-95 duration-150"
        >
          Clear
        </button>

      </div>
    </div>
  );
};

export default ShowMyName;
