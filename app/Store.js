import { createStore } from "redux";

 const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USERNAME":
      return { ...state, userName: action.payload };
    default:
      return state;
  }
};

// ایجاد store
const store = createStore(reducer, { userName: "" });

export default store;