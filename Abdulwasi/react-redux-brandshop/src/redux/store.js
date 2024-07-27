import { createStore } from "redux";

import reducers from "./reducers/index";
import { getTotals } from "../containers/cartSlice";

const store = createStore(
  reducers, 
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch(getTotals());

export default store;