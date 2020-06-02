import React from 'react'
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import Cont from './contentss';
import temp from './temp/temps';
import {  Route , Link } from 'react-router-dom'
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
    <Menu.Item key="hungry_walks"><Link to = "/hungry_walks">Hungry Walks</Link></Menu.Item>
    <Menu.Item key="food_services"><Link to = "/food_services">Food Services</Link></Menu.Item>
  </Menu>
);




class Head extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateKeyValue : "home",
      initalState : "false"
    }
  }
  handleClick = (e) => {
    console.log( "[handleClick] "+ e.key);
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


  render(){
    let temp = "";
    // console.log()
    // console.log(this.props.match.path) 
    console.log("[HEADER]" + this.state.initalState)
    if (typeof (this.props.match) !== "undefined"){
    console.log("[URL PROPS] ")
    console.log(this.props.match.path)
    let url_val = this.props.match.path
    url_val = url_val.substring(1,url_val.length);
    console.log("[salkdjlksja]" + url_val)
    temp = url_val
    }
    else{ 
      console.log("[header.js else condition]")
    temp = this.state.stateKeyValue
    this.state.initalState = true
    console.log("[header.js this is the one after allocation]" + temp)
    }
    console.log("[header.js this is outside the if else condition]" + temp)
    const headerr = (
<Header>
        <div className="logo" />
        <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' , fontSize : 16 }}
        onClick={ this.handleClick }>

        <Menu.Item key="home"><Link to = "/home"><img src = "https://100vampirenovels.com/files/15/47/34/f154734/public/sobo_9781101007105_oeb_011_r1.jpg" height="70px" width="70px" /></Link></Menu.Item>
        <Menu.Item key="hungry_rides"><Link to = "/hungry_rides">Hungry Rides</Link></Menu.Item>
        <Menu.Item key="food_walks"><Link to = "/food_walks">Hiker's Diary</Link></Menu.Item>

        <Menu.Item key = "hungry_hometown">
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" href="#">
        Hungry @ Hometown <Icon type="down" />
          </a>
      </Dropdown>
      </Menu.Item>
       
        <Menu.Item key="contact"><Link to = "/contact"> Let's Connect </Link></Menu.Item>
        <Menu.Item ><a href= "https://www.instagram.com/hungryhitchhiker/" >Gallery </a></Menu.Item>
		<Menu.Item key="order"><span class="glf-button" data-glf-cuid="2d0caf06-1db0-4c4d-82b5-af1862685b03" data-glf-ruid="c147d89e-ecfa-44cd-aad6-20da4de885db" > See MENU & Order</span>		</Menu.Item>
		
      </Menu>
    </Header>)

    console.log(temp)

    if(temp == "hungry_rides") {
      return(
      <div>
      {headerr}
    <Cont key1={"hungry_rides"} url= 'https://server-try.herokuapp.com/api/update/'/>
    </div>
    )
  } else if(temp == "food_walks"){
    return (
    <div>
    {headerr}
    <Cont key1={"food_walks"} url= 'https://server-try.herokuapp.com/api/update/' />
    </div>
    )
  }
  else if(temp == "about"){
    return (
    <div>
    {headerr}
    <Cont key1={"about"} url= 'https://server-try.herokuapp.com/api/update/' />
    </div>
    )
  }
  else if(temp == "home"){
    return(
    <div>
    {headerr}
    <Cont key1={"home"} url= 'https://server-try.herokuapp.com/api/update/'/>
    </div>
    )
  }
  else if(temp == "contact"){
    return(
    <div>
    {headerr}
    <Cont key1={"contact"} url= 'https://server-try.herokuapp.com/api/update/'/>
    </div>
    )
  }
  else if(temp == "hungry_walks"){
    return(
    <div>
    {headerr}
    <Cont key1={"hungry_walks"} url= 'https://server-try.herokuapp.com/api/update/'/>
    </div>
    )
  }
  else if(temp == "food_services"){
    return(
    <div>
    {headerr}
    <Cont key1={"food_services"} url= 'https://server-try.herokuapp.com/api/update/'/>
    </div>
    )
  }
}
}



export const headerr = (
<Header>
        <div className="logo" />
        <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' , fontSize : 16 }}
        onClick={ this.handleClick }>

        <Menu.Item key="home"><Link to = "/home"><img src = "https://100vampirenovels.com/files/15/47/34/f154734/public/sobo_9781101007105_oeb_011_r1.jpg" height="70px" width="70px" /></Link></Menu.Item>
        <Menu.Item key="hungry_rides"><Link to = "/hungry_rides">Hungry Rides</Link></Menu.Item>
        <Menu.Item key="food_walks"><Link to = "/food_walks">Hiker's Diary</Link></Menu.Item>

        <Menu.Item key = "hungry_hometown">
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" href="#">
        Hungry @ Hometown <Icon type="down" />
          </a>
      </Dropdown>
      </Menu.Item>
       
        <Menu.Item key="contact"><Link to = "/contact"> Let's Connect </Link></Menu.Item>
        <Menu.Item ><a href= "https://www.instagram.com/hungryhitchhiker/" >Gallery </a></Menu.Item>
      </Menu>
    </Header>
);
export default Head;
