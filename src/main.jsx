import React from "react";
import ReactDOM from "react-dom/client";
import OwlsBarProvider from "./context/OwlsBarProvider";
import Routes from "./routes";
import "swiper/css/bundle";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <OwlsBarProvider>
      <Routes />
    </OwlsBarProvider>
  </React.StrictMode>
);
