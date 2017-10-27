
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

import Catalogue from './components/Catalogue';
import Login from './components/Login';
import NotF from './components/NotF';
import Test from './components/Test';

if(document.getElementById('root')) {
    ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={Catalogue}/>
            <Route path="/test" component={Test}/>
            <Route path="/login" component={Login}/>
            <Route component={NotF}/>
        </Switch>
    </Router>
    , document.getElementById('root'));
}