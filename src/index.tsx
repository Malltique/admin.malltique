import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(

    <BrowserRouter>
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
        <App />
        </QueryClientProvider>
      </React.StrictMode>
    </BrowserRouter>
);
