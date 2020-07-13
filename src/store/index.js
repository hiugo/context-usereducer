import React, {useReducer} from 'react';
// Actions
import {SET_COUNT} from './actions';

const AppContext = React.createContext();

const initialState = {
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case SET_COUNT:
      return {
        ...state,
        count: state.count + action.payload
      };

    default:
      return state;
  }
}

function AppProvider({children}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  );
}

export {AppContext, AppProvider};
