import ReactDOM from "react-dom/client";
import AppProviders from "./app/providers/AppProviders.jsx";
import App from "./App.jsx";
import "./styles/globals.css";

ReactDOM.createRoot(document.querySelector("#app")).render(
  <AppProviders>
    <App />
  </AppProviders>,
);
