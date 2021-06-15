import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import CalculatorContainer from "./containers/CalculatorContainer";

export default function App() {
  return (
<Provider store={store}>
     <div className="App">
      <CalculatorContainer />
    </div>
  </Provider>

  );
}