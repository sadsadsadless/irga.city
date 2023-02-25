import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { DataProvider } from "./store/DataProvider";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <DataProvider>
      <App />
	  </DataProvider>
  </BrowserRouter>
);