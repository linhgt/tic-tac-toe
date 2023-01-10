import React, { Component } from "react";
import { RouterProvider } from "react-router-dom";
import router from './router'
// import TicTacToe from "./containers/TicTacToe.jsx";
import "./app.scss";

class App extends Component {
  render() {
    return <RouterProvider router={router} fallbackElement={<div>loading..</div>}/>
  }
}

export default App;
