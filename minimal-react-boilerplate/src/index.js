import React from 'react';
import ReactDOM from 'react-dom';

const title = 'My Minimal React Webpack';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept(); //Comment it and browser will reload the page
