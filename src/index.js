import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from '../src/components/App';
import reducer from './reducers/index'

const store = createStore(reducer)

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));


