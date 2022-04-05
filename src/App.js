import "App.css";
// import Home from "pages/home";
import Search from "pages/search";
import { Provider } from "react-redux";
import store from "redux/store";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Provider store={store}>
      <Search />

      </Provider>
    </div>
  );
}
export default App;
