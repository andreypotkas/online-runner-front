import ReactDOM from "react-dom/client";

import { PrimeReactProvider } from "primereact/api";

import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <PrimeReactProvider>
    <App />
  </PrimeReactProvider>
);
