import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import Bread from './bread'
import Slider from './slider'
import Intro from './intro'
import axios from 'axios'
import $ from 'jquery';
import 'readmore-js';
import jq from 'readmore-js/node_modules/jquery';



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
  	if ( thisDefault != 100){
  		// alert('miracle')
  	thisDefault = 1
  }
  else {
  	// alert('here')
  	thisDefault = null}
  }
  loadCommentsFromServer =() =>{
    axios.get(this.props.url)
      .then(res => {
        this.setState({ hungry_rides : res.data[8].hungry_rides ,
                        food_walks : res.data[8].food_walks,
                        about : res.data[8].about
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
  	if(thisDefault == "hungry_rides") {
      var a = []
    var hungry_rides = this.state.hungry_rides || []
    hungry_rides.forEach(function(item, index){
      var temp = (<Card id = "journal-title" title={item.title}  style={{ width: 1100 , fontSize :15, padding: 24 , margin: 30}}>
      <div className={"content-container" + index}> </div>
      </Card>
      )

      $( document ).ready(function() {
          $('.content-container' + index).html(item.content)

            jq('.content-container' + index).readmore({
              speed : 5,
              maxHeight : 500
            });
      });
  
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
      var temp = (<Card id = "journal-title" title={item.title}  style={{ width: 1100 , fontSize :15, padding: 24 , margin: 30}}>
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
  else if(thisDefault == "about"){
    var a = []
    var about = this.state.about || []
    about.forEach(function(item, index){
      var temp = (<Card id = "journal-title" title={item.title}  style={{ width: 1100 , fontSize :15, padding: 24 , margin: 30}}>
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
  else if(thisDefault == "home"){
    data = (
    <div id = "journal" style={{ background: '#fff', padding: 24 , textAlign : 'center', fontSize: 20}}>
       <Slider />
       <br />
       <p>
       Any man who can hitch the length and breadth of the galaxy, rough it, slum it, struggle against terrible odds and still know where his home is, he is clearly the man to be reckoned with.
Two years back, I started an unprecedented journey by stepping out from the world of engineering, to fulfill my passion and to justify that I am the maker of my own destiny.
My destiny is still a work under progress though. :)
</p>
<p style={{textAlign : 'left' , fontSize : 18 , paddingLeft : 8}}>
<b style = {{ fontSize : 20 , paddingLeft: 20}}>I am:</b>
<ul>
<li>A food explorer and an aspiring chef.</li>
<li>I am on an adventurous and expeditious hitchhiking journey called life, to learn as much as I can, in order to educate myself with the voracious knowledge that the world has to provide. </li>
<li>A believer and preacher of the ideology<i>‘healthy is tasty, if one know how to make it’</i>.</li>
<li>A dreamer, who hopes to open a restaurant in <b>Jaipur</b> <i>(my hometown)</i> based on my exploration and  experiences.</li>
</ul>
</p>
<br />
<p>
To all of you awesome people reading this, I hope you enjoy this journey with me as much as I have. :)
</p>
<p style= {{fontSize : 24}}>
<b>-<a href="https://www.facebook.com/vinayakagr" target = "_blank">Vinayak</a> aka 'HungryHitchhiker'</b>
</p>
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

