// JSX

import "./style.css"

// import { createElement } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App";
import Faq from "./Faq";
import FaqSection from "./FaqSection";

const rootElement = document.querySelector("#root");

const root = createRoot(rootElement);

root.render(<FaqSection/>);

// const root = createRoot(rootElement);

// const task = ["Apple","Orange","Mango","Banana"]

// root.render(
//   createElement(
//     "div",
//     null,
//     createElement("h1", null, "Todo App"),
//     createElement(
//       "form",
//       null,
//       createElement("input", null),
//       createElement("button", null, "Add New")
//     ),
//     createElement("ul",null,task.map((el,index) => createElement("li",{key:index},el)))
//   )
// );
