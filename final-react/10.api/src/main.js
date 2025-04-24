import "./style.css";

const fetchBtn = document.querySelector("#fetch-btn");

const handleFetchBtn = () => {
  console.log("U click");
  const res = fetch("http://localhost:5000/tasks/1").then((response) => response.json()).then((data) => console.log(data));
  console.log(res);
};

fetchBtn.addEventListener("click", handleFetchBtn);
