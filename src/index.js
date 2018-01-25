import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";

import "semantic-ui-css/semantic.css";

// Save a reference to the root element for reuse
const rootElement = document.getElementById("root");

// Create a reusable render method that we can call more than once
let render = () => {
    // Dynamically import main App component
    const App = require("./App").default;

    ReactDOM.render(
        <Provider>
            <App />
        </Provider>,
        rootElement
    );
};

if(module.hot) {
    // Support hot reloading of components.
    // Whenever the App component file or one of its dependencies
    // is changed, re-import the updated component and re-render it
    module.hot.accept("./App", () => {
        setTimeout(render);
    });
}

render();

