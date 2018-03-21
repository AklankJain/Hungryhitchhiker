    import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import { Layout, Menu, Breadcrumb, Sider, Dropdown, Icon , Carousel, Card } from 'antd';


class Bread extends React.Component {
  render(){
    return( 

    	<Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>

    )
}
}


 export default Bread