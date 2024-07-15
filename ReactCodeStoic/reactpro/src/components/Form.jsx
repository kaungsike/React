import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  // const handleInput = (e) => {
  //     setName(e.target.value)
  // }

  // const handleInputUpdate = (e) => {
  //     if(e.key === "Enter"){
  //         setName("");
  //     }
  // }

  return (
    <div>
      {name.firstName} - {name.lastName}
      <form action="">
        <input
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          type="text"
          value={name.firstName}
        />
        <input
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          type="text"
          value={name.lastName}
          name=""
          id=""
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log(name)
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
