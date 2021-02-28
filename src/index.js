import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, compose, applyMiddleware, combineReducers} from 'redux';
import friendsReducer from './reducers/friendsReducer';
import userReducer from './reducers/userReducer'
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import groupReducer from './reducers/groupReducer';
import gameReducer from './reducers/gamesReducer';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = {}
 
const rootReducer = combineReducers({
  user: userReducer,
  friend: friendsReducer,
  group: groupReducer, 
  games: gameReducer
})

const store = createStore(rootReducer, initialState, compose(applyMiddleware(thunk), composeWithDevTools()))

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
