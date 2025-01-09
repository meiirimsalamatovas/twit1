import React from "react";
import ReactDOM from "react-dom/client";
import SideMenu from "./components/SideMenu/SideMenu";
import Home from "./components/Home/index";
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById("root");
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <div style={{ display: "flex" }}>

                <SideMenu />

                <Home />
            </div>
        </React.StrictMode>
    );
} else {
    console.error("Root element not found");
}
