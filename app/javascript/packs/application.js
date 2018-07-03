/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
// import {HashRouter as Router, Route} from 'react-router-dom';

import "../src/application.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';

// import Home from '../components/Home'

// const Routes = (
//   <Router>
//     <div>
//       {/* <Route exact path="/" component={ Home } /> */}
//       <Route exact path="/" component={ Home } />
//     </div>
//   </Router>
// );

document.addEventListener('DOMContentLoaded', () => {
  const container = document.body.appendChild(document.createElement('div'));
  ReactDOM.render(<App/>, container);
})
