import React, {useContext} from 'react';
import {AppContext} from './store';
import * as actions from './store/actions'

function App() {
  const {state, dispatch} = useContext(AppContext);
  return (
    <div>
      <div>Count: ${state.count}</div>
      <button onClick={handleClick}>+1</button>
    </div>
  );

  function handleClick() {
    dispatch(actions.setCount(1))
  }
}

export default App;
