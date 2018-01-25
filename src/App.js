import React, { Component } from 'react';
import { Header } from "semantic-ui-react";

import './styles/App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <Header inverted as="h2">Shift Illuminator</Header>
                </div>
            </div>
        );
    }
}

export default App;
