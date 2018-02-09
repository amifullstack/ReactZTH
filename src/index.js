import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
// import ReactCountDown from './Components/ReactCountDown/ReactCountDown';
import App from './App';


const renderApp = (Component) => {
  render(
    <AppContainer>
      <Component name="react-count-down"/>
    </AppContainer>,
    document.querySelector('#react-app'),
  );
};


// // only accept callback will be executed on each hot loading.

// renderApp(App);

// if( module && module.hot) {
//   module.hot.accept('./App', () => {
//     renderApp(App);
//   });  
// }

// In case of bellow
// whole js file will be executed each time, not just accept callback.

if (module.hot) {
  module.hot.accept();
  const App = require('./App').default;
  renderApp(App);
}