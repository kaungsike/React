import reactDOM from "react-dom/client"
import App from "./App";
import "./index.css"

const rootElement = document.querySelector("#root");

const root = reactDOM.createRoot(rootElement);

root.render(<App/>)
