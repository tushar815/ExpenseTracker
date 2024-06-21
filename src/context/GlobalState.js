import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//intial state
const initialState = {
  transactions: [],
};

//Create Context
export const GlobalContext = createContext(initialState);

//Create Provider
//dispatch function lets you update the state to a different value and trigger a rerender.
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  //Actions
  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
