import { Provider } from "react-redux";
import Router from "./router/router";

import store from "./store/store";
import { AlertProvider } from "@/features/alert";

function App() {
  return (
    <>
      <Provider store={store}> 
      <AlertProvider>
        <Router />
        </AlertProvider>
      </Provider>
    </>
  );
}

export default App;
