import React from 'react';
import ReactDOM from 'react-dom';

const title = 'My Minimal React Webpack https://www.robinwieruch.de/minimal-react-webpack-babel-setup/';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept(); //Comment it and browser will reload the page
