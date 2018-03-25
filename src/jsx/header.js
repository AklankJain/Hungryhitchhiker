import React from 'react'
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import Cont from './contentss';
import temp from './temp/temps';

import { Layout, Menu, Breadcrumb, Sider, Dropdown, Icon , Carousel, Card } from 'antd';
const { Header, Content, Footer } = Layout;

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">Catering</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">Tiffin Services</a>
    </Menu.Item>
  </Menu>
);


class Head extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateKeyValue : "about"
    }
  }

  handleClick = (e) => {
    console.log(e.key);
    this.setState({
      stateKeyValue : e.key
    })
  }

  render(){
    var temp = this.state.stateKeyValue
    console.log(temp)
    if(temp == "hungry_rides") {
      return(
      <div>
      <Header>
        <div className="logo" />
        <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
        onClick={ this.handleClick }>

       	<Menu.Item key="image"><img src = "https://100vampirenovels.com/files/15/47/34/f154734/public/sobo_9781101007105_oeb_011_r1.jpg" height="50px" width="50px" /></Menu.Item>
        <Menu.Item key="hungry_rides">Hungry Rides</Menu.Item>
        <Menu.Item key="food_walks">Hiker's Diary</Menu.Item>

        <Menu.Item key="4">
        <Dropdown overlay={menu}>
    		<a className="ant-dropdown-link" href="#">
      		Services <Icon type="down" />
    		</a>
  		</Dropdown> </Menu.Item>
        <Menu.Item key="about">About the Story</Menu.Item>
        <Menu.Item key="6"> Let's Connect </Menu.Item>

      </Menu>
    </Header>
    <Cont key1={"hungry_rides"} url= 'https://server-try.herokuapp.com/api/update/'/>
    </div>
    )
  } else if(temp == "food_walks"){
    return (
    <div>
    <Header>
        <div className="logo" />
        <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
        onClick={ this.handleClick }>

        <Menu.Item key="image"><img src = "http://hungryhitchhiker.com/wp-content/uploads/2017/10/cropped-hhh-1.png" height="50px" width="50px" /></Menu.Item>
        <Menu.Item key="hungry_rides">Hungry Rides</Menu.Item>
        <Menu.Item key="food_walks">Hiker's Diary</Menu.Item>
        <Menu.Item key="4">
        <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" href="#">
          Services <Icon type="down" />
        </a>
      </Dropdown> </Menu.Item>
        <Menu.Item key="about">About the Story</Menu.Item>
        <Menu.Item key="6"> Let's Connect </Menu.Item>

      </Menu>
    </Header>
    <Cont key1={"food_walks"}/>
    </div>
    )
  }
  else if(temp == "about"){
    return (
    <div>
    <Header>
        <div className="logo" />
        <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['4']}
        style={{ lineHeight: '64px' }}
        onClick={ this.handleClick }>

        <Menu.Item key="image"><img src = "http://hungryhitchhiker.com/wp-content/uploads/2017/10/cropped-hhh-1.png" height="50px" width="50px" /></Menu.Item>
        <Menu.Item key="hungry_rides">Hungry Rides</Menu.Item>
        <Menu.Item key="food_walks">Hiker's Diary</Menu.Item>
        <Menu.Item key="4">
        <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" href="#">
          Services <Icon type="down" />
        </a>
      </Dropdown> </Menu.Item>
        <Menu.Item key="about">About the Story</Menu.Item>
        <Menu.Item key="6"> Let's Connect </Menu.Item>

      </Menu>
    </Header>
    <Cont key1={"about"}/>
    </div>
    )
  }
}
}

export default Head