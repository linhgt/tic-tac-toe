import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./app.scss";
import { store } from "@/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
