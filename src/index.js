import React from 'react';

import ReactDOM from 'react-dom';

import { createHashHistory } from 'history';
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App';
import Try from './jsx/try';
import Foot from './jsx/foot'
import Cont from './jsx/contentss';
import 'antd/dist/antd.css';
import './app.css';
import Head from './jsx/header';
import MyEditor from './editor'
import { Layout, Menu, Breadcrumb, Sider, Dropdown, Icon , Carousel, Card } from 'antd';
const {  Footer, Content, Header } = Layout;

var connection = require("./connection.js");



ReactDOM.render(
    <BrowserRouter>
    	<div>
    	<Route exact path='/' component = {App} />
    	<Route exact path='/form' component = {MyEditor} />   	
    	</div>
    </BrowserRouter>
	, 
document.getElementById('root')
	);	
