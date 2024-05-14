import "./style.css";
import App from "../src/App";

import { createRoot } from "react-dom/client";


const rootElement = document.querySelector("#root");

const root = createRoot(rootElement)

root.render(<App/>)


const area = (x,y) => {
    return x*y;
}

// console.log(area(46,6));
// console.log(area(223,645));
// console.log(area(4546,7));