import store from "@/pages/countRedux/redux/store";
import Count from "@/pages/countRedux";

function App() {
  return (
    <div className="App">
      <Count store={store} />
    </div>
  );
}

export default App;
