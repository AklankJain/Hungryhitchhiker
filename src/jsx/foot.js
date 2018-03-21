    import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import { Layout, Menu, Breadcrumb, Sider, Dropdown, Icon , Carousel, Card } from 'antd';
const {  Footer } = Layout;



class Foot extends React.Component {
  render(){
    return( 

    <Footer style={{ textAlign: 'center' }}>
      Hungry Hitchhiker ©2018 Created by Aklank Jain
    </Footer>

    )
}
}

export default Foot