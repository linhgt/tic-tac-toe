import React, {Component} from "react";
import {hot} from "react-hot-loader";
import TicTacToe from "./TicTacToe.jsx";
import "./app.scss";

class App extends Component{
    render(){
        return (
            <TicTacToe />
        )
    }
}

export default hot(module)(App);
