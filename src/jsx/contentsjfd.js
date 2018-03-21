import React from 'react'
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import { Layout, Menu, Breadcrumb, Sider, Dropdown, Icon , Carousel, Card } from 'antd';
const { Header, Content, Footer } = Layout;




 <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24 }}>
      <Carousel afterChange={onChange}>
    	<div><img src = "https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg"  height = "460px" width = "1150px"/></div>
    	<div><h3>2</h3></div>
    	<div><h3>3</h3></div>
    	<div><h3>4</h3></div>
  	</Carousel>
      </div>
      <div id = "journal" style={{ background: '#fff', padding: 24 }}>
       <Card id = "journal-title" title="Hungry Rides" extra={<a href="#">More</a>} style={{ width: 1000 }}>
    	<p>Join me as I travel the world in different ways hoping to learn different things through different experiences. Idea is to find different places with different ways of living and working, serving different kind of food to different kind of people. This also helps me in avoiding monotonousness to my fickle ever changing mind. Community living, working in cafe and connecting with roots are the three ways I am doing it at the moment.</p>
  		</Card>
      </div>
    </Content>