import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './types';
import fb from './firebase';
import 'regenerator-runtime/runtime.js';

ReactDOM.render(<App />, document.getElementById('root'));