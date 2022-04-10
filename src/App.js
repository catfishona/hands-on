import React from "react";
import "App.css";
import { Provider } from "react-redux";
import { Nav } from "components/Nav";
import store from "redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Nav/>
      </Provider>
    </div>
  );
}
export default App;
