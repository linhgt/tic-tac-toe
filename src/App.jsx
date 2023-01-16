import { Component } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";

class App extends Component {
  render() {
    return (
      <RouterProvider router={router} fallbackElement={<div>loading..</div>} />
    );
  }
}

export default App;
