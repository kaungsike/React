const myName = "Kaung Sike";
const app = document.querySelector("#app");


const showMyName = () => { 
  app.innerHTML = myName;
  console.log(myName);
}

showMyName();