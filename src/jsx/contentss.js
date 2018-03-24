import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import Bread from './bread'
import Slider from './slider'
import Intro from './intro'
import axios from 'axios'

import { Layout, Menu, Breadcrumb, Sider, Dropdown, Icon , Carousel, Card } from 'antd';
const { Header, Content, Footer } = Layout;

function onChange(a, b, c) {
  console.log(a, b, c);
}

var thisDefault = 100
class Cont extends React.Component {
	
  constructor(props) {
  	super(props);
  	thisDefault = this.props.key1
  	console.log('inside constructor')
  	console.log('hello' + thisDefault)
    console.log( 'trying multiple props '+ this.props.url)
    this.state = {
      data : []
    };
  	// alert(this.props.key1)
  	// if ( thisDefault != 100){
  	// 	alert('miracle')
  	// thisDefault = 1
  // }
  // else {
  // 	alert('here')
  // 	thisDefault = null}
  // }
  loadCommentsFromServer =() =>{
    axios.get(this.props.url)
      .then(res => {
        this.setState({ hungry_rides : res.data[9].hungry_rides ,
                        food_walks : res.data[9].food_walks,
                        about : res.data[9].about
                      });
      })
  }

componentWillMount() {
	console.log('component mounted')
}

componentDidMount() {
    console.log('conponentMounted')
    this.loadCommentsFromServer();
  }

componentWillUnmount() {
	console.log('unmounted')
}

  render(){
  	thisDefault = this.props.key1
  	console.log('helloinrender' + thisDefault)
    var tempData= this.state.data
    console.log('looking at the state data ' + tempData)
    var data = null
  	if(thisDefault == "about") {
      var a = []
    var hungry_rides = this.state.about || []
    hungry_rides.forEach(function(item, index){
      var temp = (<Card id = "journal-title" title={item.title} extra={<a href="#">More</a>} style={{ width: 1100 , fontSize :15, padding: 24 , margin: 30}}>
      <p>{item.content}</p>
      </Card>
      )
      a.push(temp)
      })
     data = (
      <div id = "journal" style={{ background: '#fff', padding: 24 , textAlign : 'center'}}> 
        {a}
      </div>
      )
  }
  else if(thisDefault == "food_walks"){
    var a = []
    var food_walks = this.state.food_walks || []
    food_walks.forEach(function(item, index){
      var temp = (<Card id = "journal-title" title={item.title} extra={<a href="#">More</a>} style={{ width: 1100 , fontSize :15, padding: 24 , margin: 30}}>
      <p>{item.content}</p>
      </Card>
      )
      a.push(temp)
      })
  data = ( 	<div id = "journal" style={{ background: '#fff', padding: 24 , textAlign : 'center'}}>
       {a}
      </div>
      )
  }
  else if(thisDefault == "hungry_rides"){
    var a = []
    var about = this.state.hungry_rides || []
    about.forEach(function(item, index){
      var temp = (<Card id = "journal-title" title={item.title} extra={<a href="#">More</a>} style={{ width: 1100 , fontSize :15, padding: 24 , margin: 30}}>
      <p>{item.content}</p>
      </Card>
      )
      a.push(temp)
      })
  data = (  <div id = "journal" style={{ background: '#fff', padding: 24 , textAlign : 'center'}}>
       {a}
      </div>
      )
  }
  else{
    data = (  <div id = "journal" style={{ background: '#fff', padding: 24 , textAlign : 'center'}}>
       <h1>Hello </h1>
      </div>
      )
  }
    return( 
        <Content style={{ padding: '0 50px', background: 'white' }}>
        	{data}
    </Content>
 
    )}}

    export default Cont

