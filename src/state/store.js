import { applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: reducers,
  middleware: [thunk],
});

export default store;

// import { applyMiddleware, createStore } from "redux";
// import reducers from "./reducers";
// import thunk from "redux-thunk";

// const store = createStore(reducers, applyMiddleware(thunk));

// export default store;
