import React from "react";
import ReactDOM from "react-dom/client";

function App() {
    return <h1>Hello React!</h1>;
}

// Rendering root in React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
); //Strict mode is for checking proper version and for react bugs - for react
