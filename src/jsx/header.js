import React from 'react'
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import Cont from './contentss';
import temp from './temp/temps';

import { Layout, Menu, Breadcrumb, Sider, Dropdown, Icon , Carousel, Card } from 'antd';
const { Header, Content, Footer } = Layout;

var ti = ""
const onClick = function ({ key }) {
  console.log(key);
  ti = key
  console.log(ti)
};

const menu = (
  <Menu onClick={onClick}>
    <Menu.Item key="hungry_walks">Hungry Walks</Menu.Item>
    <Menu.Item key="food_services">Food Services</Menu.Item>
  </Menu>
);


class Head extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateKeyValue : "home"
    }
  }
  handleClick = (e) => {
    console.log(e.key);
    if(e.key == "hungry_hometown"){
      this.setState({
      stateKeyValue : ti
    })
    }
    else{
    this.setState({
      stateKeyValue : e.key
    })
  }
  }

  myFunction = () =>  {
    var x = document.getElementById("myTopnav");
    if (x.className === "ant-menu-item") {
        x.className += " responsive";
    } else {
        x.className = "ant-menu-item";
    }
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
        style={{ lineHeight: '64px' , fontSize : 16 }}
        onClick={ this.handleClick }>

        <Menu.Item key="home"><img src = "https://100vampirenovels.com/files/15/47/34/f154734/public/sobo_9781101007105_oeb_011_r1.jpg" height="70px" width="70px" /></Menu.Item>
        <Menu.Item key="hungry_rides">Hungry Rides</Menu.Item>
        <Menu.Item key="food_walks">Hiker's Diary</Menu.Item>

        <Menu.Item key = "hungry_hometown">
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" href="#">
        Hungry @ Hometown <Icon type="down" />
          </a>
      </Dropdown>
      </Menu.Item>
       
        <Menu.Item key="contact"> Let's Connect </Menu.Item>
        <Menu.Item ><a href= "https://www.instagram.com/hungryhitchhiker/" >Gallery </a></Menu.Item>
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
        style={{ lineHeight: '64px' , fontSize : 16}}
        onClick={ this.handleClick }>

        <Menu.Item key="home"><img src = "https://100vampirenovels.com/files/15/47/34/f154734/public/sobo_9781101007105_oeb_011_r1.jpg" height="70px" width="70px" /></Menu.Item>
        <Menu.Item key="hungry_rides">Hungry Rides</Menu.Item>
        <Menu.Item key="food_walks">Hiker's Diary</Menu.Item>
        <Menu.Item key = "hungry_hometown">
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" href="#">
        Hungry @ Hometown <Icon type="down" />
          </a>
      </Dropdown>
      </Menu.Item>
        <Menu.Item key="contact"> Let's Connect </Menu.Item>
        <Menu.Item ><a href= "https://www.instagram.com/hungryhitchhiker/" >Gallery </a></Menu.Item>

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
        style={{ lineHeight: '64px' , fontSize : 16}}
        onClick={ this.handleClick }>

        <Menu.Item key="home"><img src = "https://100vampirenovels.com/files/15/47/34/f154734/public/sobo_9781101007105_oeb_011_r1.jpg" height="70px" width="70px" /></Menu.Item>
        <Menu.Item key="hungry_rides">Hungry Rides</Menu.Item>
        <Menu.Item key="food_walks">Hiker's Diary</Menu.Item>
        <Menu.Item key = "hungry_hometown">
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" href="#">
        Hungry @ Hometown <Icon type="down" />
          </a>
      </Dropdown>
      </Menu.Item>
       
       <Menu.Item key="contact"> Let's Connect </Menu.Item>
        <Menu.Item ><a href= "https://www.instagram.com/hungryhitchhiker/" >Gallery </a></Menu.Item>

      </Menu>
    </Header>
    <Cont key1={"about"} url= 'https://server-try.herokuapp.com/api/update/' />
    </div>
    )
  }
  else if(temp == "home"){
    return(
    <div>
    <Header>
        <div className="logo" />
        <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['5']}
        style={{ lineHeight: '64px', fontSize : 16 }}
        onClick={ this.handleClick }
         >

        <Menu.Item  key="home" style={{ background: '#fff' }}><img src = "https://100vampirenovels.com/files/15/47/34/f154734/public/sobo_9781101007105_oeb_011_r1.jpg" height="70px" width="70px" /></Menu.Item>
        <Menu.Item  key="hungry_rides" >Hungry Rides</Menu.Item>
        <Menu.Item  key="food_walks">Hiker's Diary</Menu.Item>
        <Menu.Item  key = "hungry_hometown"   >
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" href="#">
        Hungry @ Hometown <Icon type="down" />
          </a>
      </Dropdown>
      </Menu.Item>
       <Menu.Item key="contact"> Let's Connect </Menu.Item>
         <Menu.Item ><a href= "https://www.instagram.com/hungryhitchhiker/" >Gallery </a></Menu.Item>
        <Menu.Item><a href="javascript:void(0);" class="icon" onclick="myFunction()">&#9776;</a></Menu.Item>
      </Menu>
    </Header>
    <Cont key1={"home"} url= 'https://server-try.herokuapp.com/api/update/'/>
    </div>
    )
  }
  else if(temp == "contact"){
    return(
    <div>
    <Header>
        <div className="logo" />
        <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px', fontSize : 16 }}
        onClick={ this.handleClick }>

        <Menu.Item key="home"><img src = "https://100vampirenovels.com/files/15/47/34/f154734/public/sobo_9781101007105_oeb_011_r1.jpg" height="70px" width="70px" /></Menu.Item>
        <Menu.Item key="hungry_rides">Hungry Rides</Menu.Item>
        <Menu.Item key="food_walks">Hiker's Diary</Menu.Item>
        <Menu.Item key = "hungry_hometown">
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" href="#">
        Hungry @ Hometown <Icon type="down" />
          </a>
      </Dropdown>
      </Menu.Item>
        <Menu.Item key="food_services"> Let's Connect </Menu.Item>
         <Menu.Item ><a href= "https://www.instagram.com/hungryhitchhiker/" >Gallery </a></Menu.Item>

      </Menu>
    </Header>
    <Cont key1={"contact"} url= 'https://server-try.herokuapp.com/api/update/'/>
    </div>
    )
  }
  else if(temp == "hungry_walks"){
    return(
    <div>
    <Header>
        <div className="logo" />
        <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['0']}
        style={{ lineHeight: '64px', fontSize : 16 }}
        onClick={ this.handleClick }>

        <Menu.Item key="home"><img src = "https://100vampirenovels.com/files/15/47/34/f154734/public/sobo_9781101007105_oeb_011_r1.jpg" height="70px" width="70px" /></Menu.Item>
        <Menu.Item key="hungry_rides">Hungry Rides</Menu.Item>
        <Menu.Item key="food_walks">Hiker's Diary</Menu.Item>
        <Menu.Item key = "hungry_hometown">
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" href="#">
        Hungry @ Hometown <Icon type="down" />
          </a>
      </Dropdown>
      </Menu.Item>
        <Menu.Item key="contact"> Let's Connect </Menu.Item>
         <Menu.Item ><a href= "https://www.instagram.com/hungryhitchhiker/" >Gallery </a></Menu.Item>

      </Menu>
    </Header>
    <Cont key1={"hungry_walks"} url= 'https://server-try.herokuapp.com/api/update/'/>
    </div>
    )
  }
  else if(temp == "food_services"){
    return(
    <div>
    <Header>
        <div className="logo" />
        <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['0']}
        style={{ lineHeight: '64px', fontSize : 16 }}
        onClick={ this.handleClick }>

        <Menu.Item key="home"><img src = "https://100vampirenovels.com/files/15/47/34/f154734/public/sobo_9781101007105_oeb_011_r1.jpg" height="70px" width="70px" /></Menu.Item>
        <Menu.Item key="hungry_rides">Hungry Rides</Menu.Item>
        <Menu.Item key="food_walks">Hiker's Diary</Menu.Item>
        <Menu.Item key = "hungry_hometown">
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" href="#">
        Hungry @ Hometown <Icon type="down" />
          </a>
      </Dropdown>
      </Menu.Item>
       
        <Menu.Item key="contact"> Let's Connect </Menu.Item>
        <Menu.Item ><a href= "https://www.instagram.com/hungryhitchhiker/" >Gallery </a></Menu.Item>

      </Menu>
    </Header>
    <Cont key1={"food_services"} url= 'https://server-try.herokuapp.com/api/update/'/>
    </div>
    )
  }
}
}

export default Head