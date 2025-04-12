import { createElement } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App";

const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const root = document.querySelector("#root");

const app = createElement(
  "p",
  { className: "text-3xl mb-5 font-bold underline text-center mt-10" },
  "Hello Vite + Vanilla JS!",
  createElement(
    "div",
    null,
    categories.map((category) =>
      createElement(
        "button",
        {
          className:
            "bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded m-2",
        },
        category
      )
    )
  )
);

createRoot(root).render(App());

// const title = document.createElement('p');
// title.textContent = 'Hello Vite + Vanilla JS!';
// title.className = 'text-3xl mb-5 font-bold underline text-center mt-10';

// root.append(title);

// const categoryButton = (categoryName) => {
//     const btn = document.createElement('button');
//     btn.textContent = categoryName;
//     btn.classList.add('bg-blue-500', 'hover:bg-blue-700', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded', 'm-2');

//     return btn;
// }

// categories.forEach((category) => root.append(categoryButton(category)));
