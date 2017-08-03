import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import {Main} from './app/main';

import './styles/index.scss';

ReactDOM.render(
  <Main/>,
  document.getElementById('root')
);
