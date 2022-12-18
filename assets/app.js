import './styles/app.scss';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

const $ = require('jquery');
require('bootstrap');
require('@fortawesome/fontawesome-free/css/all.min.css');
require('@fortawesome/fontawesome-free/js/all.js');

import Home from './js/components/Home';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Router><Home /></Router>);