
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';

import Catalogue from './pages/Catalogue';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Bulbs from './pages/Bulbs';

if(document.getElementById('root')) {
    ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={Catalogue}/>
            <Route path="/bulbs" component={Bulbs}/>
            <Route path="/login" component={Login}/>
            <Route component={NotFound}/>
        </Switch>
    </Router>
    , document.getElementById('root'));
}