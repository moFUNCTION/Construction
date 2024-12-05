import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { I18nextProvider } from "react-i18next";
import "./i18n";
import i18n from "./i18n";
import { DirectionProvider } from "./Utils/DirectionProvider/DirectionProvider.jsx";
const theme = extendTheme({
  direction: i18n.language === "ar" ? "rtl" : "ltr",
});
localStorage.setItem("chakra-ui-color-mode", "light");
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <DirectionProvider>
          <ChakraProvider theme={theme}>
            <App />
          </ChakraProvider>
        </DirectionProvider>
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
