import React from 'react';

import ReactDOM from 'react-dom';

import { createHashHistory } from 'history';
import { BrowserRouter, Route , Redirect } from 'react-router-dom'
import App from './App';
import Try from './jsx/try';
import Foot from './jsx/foot'
import Cont from './jsx/contentss';
import 'antd/dist/antd.css';
import './app.css';
import Head from './jsx/header';
import ReadMore from './jsx/readmore';
import MyEditor from './editor';
import { Layout, Menu, Breadcrumb, Sider, Dropdown, Icon , Carousel, Card } from 'antd';
import Picture from './picture-form';
const {  Footer, Content, Header } = Layout;

var connection = require("./connection.js");



ReactDOM.render(
    <BrowserRouter>
    	<div>
    	<Route exact path='/' component = {App} />
    	<Route exact path='/form' component = {MyEditor} /> 
    	<Route exact path='/picture' component = {Picture} />
    	<Route exact path='/read' component={ReadMore} />
        <Route exact path='/hungry_rides' component={Head}  />
        <Route exact path='/food_walks' component={Head} />
        <Route exact path='/contact' component={Head} />
        <Route exact path='/hungry_walks' component={Head} />
        <Route exact path='/food_services' component={Head} /> 
        <Route exact path='/home' component={Head} /> 
        <Route path = '/hungry_rides/:id' component={Cont} /> 
    	</div>
    </BrowserRouter>
	, 
document.getElementById('root')
	);	
