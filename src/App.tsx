import { Provider } from "react-redux";
import store from "@/pages/countRedux/redux/store";
import Count from "@/pages/countRedux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Count />
      </Provider>
    </div>
  );
}

export default App;
