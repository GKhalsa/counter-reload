import React, {Component} from "react";
import "./App.css";
import {getNewValue} from './helpers/randomNumGen'

const setInitialState = () => ({currentVal: 0, targetVal: getNewValue()})

class App extends Component {

    state = setInitialState();

    counterChange = (val) => {
        this.setState({currentVal: val}, this.handleReset)
    };

    handleReset = () => {
        const {currentVal, targetVal} = this.state
        if (currentVal === targetVal) {
            this.setState(setInitialState)
        }
    };

    render() {
        const {currentVal, targetVal} = this.state

        return (
            <div className="App">
                <div>
                    {currentVal} of {targetVal}
                </div>
                <div>
                    <button onClick={() => this.counterChange(currentVal - 1)}>dec</button>
                    <button onClick={() => this.counterChange(currentVal + 1)}>inc</button>
                </div>
            </div>
        );
    }
}

export default App
