import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import 'core-js/features/object';
import 'core-js/features/string';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import addIconsToLib from './utils/icons';

addIconsToLib();

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
