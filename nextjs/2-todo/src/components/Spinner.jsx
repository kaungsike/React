import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center p-5 items-center">
      <div className="h-6 w-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
