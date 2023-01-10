import React, {Component} from "react";
import {hot} from "react-hot-loader";
// import TicTacToe from "./containers/TicTacToe.jsx";
import MainMenu from "@containers/main-menu";
import "./app.scss";

class App extends Component{
    render(){
        return (
            <MainMenu />
        )
    }
}

export default hot(module)(App);
