import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './component/home.css'
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './component/carrousel'


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
