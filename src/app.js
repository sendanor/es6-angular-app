/** Copyright 2017 Jaakko-Heikki Heusala <jheusala@iki.fi> */

import './main.scss';
import angular from 'angular';
import routing from './config/routing.js';
import uirouter from 'angular-ui-router';
import home from './pages/home';

angular.module('app', [uirouter, home])
   .config(routing);
