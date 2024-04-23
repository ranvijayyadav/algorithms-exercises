import React, { createContext, useContext, useReducer } from 'react';

// Step 1: Create context and provider
const CounterContext = createContext();

const initialState = {
  count: 0
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

// Step 2: Create counter component
export const Counter = () => {
  const { state, dispatch } = useContext(CounterContext);

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div>
      <h2>Counter</h2>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};



import React from 'react';
import ReactDOM from 'react-dom';
import { CounterProvider, Counter } from './Counter';

const App = () => {
  return (
    <CounterProvider>
      <div>
        <Counter />
      </div>
    </CounterProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
