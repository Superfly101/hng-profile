import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-yoaz0vnd4h8pc4e7.us.auth0.com"
        clientId="Q7ZCuzsYuooUGWM2LZQgjl5Ysa0LFeif"
        authorizationParams={{
          redirect_uri: "https://superfly101.github.io/image-gallery",
        }}
      >
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);
