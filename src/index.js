import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

(function(){
  var _log = console.log;
  var _error = console.error;
  var _warning = console.warning;

  console.error = function(errMessage){
     _error.apply(console,arguments);
  };

  console.log = function(logMessage){
      // Do something with the log message
      _log.apply(console,arguments);
  };

  console.warning = function(warnMessage){
     // do something with the warn message
     _warning.apply(console,arguments);
  };

  const socket = new WebSocket("wss://www.example.com/socketserver", "protocolOne");
  
})();
