const React = require('react'), 
      ReactDOM = require('react-dom'), 
      App  = require('./App'), 
      appDOMNode = document.getElementById('app')

ReactDOM.render(React.createElement(App), appDOMNode)

