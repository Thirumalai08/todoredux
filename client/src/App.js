import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import store from './store'
import List from './components/List';
import Topnav from './components/Topnav';


function App() {
  return (
    <Provider store={store}>
    <div>
        <Topnav />
        <List />
    </div>
    </Provider>
  );
}

export default App;
