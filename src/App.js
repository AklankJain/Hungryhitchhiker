import React from 'react'
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';


import Foot from './jsx/foot'
import Cont from './jsx/contentss';
import Head from './jsx/header';

import { Layout, Menu, Breadcrumb, Sider, Dropdown, Icon , Carousel, Card } from 'antd';
const {  Footer, Content, Header } = Layout;
// const App = () => <h1>Hi</h1> 



class App extends React.Component {
  render(){
    return( 
      <Layout className="layout">
    <Head />
    <Foot />
    </Layout>
    )
}
}


export default App


