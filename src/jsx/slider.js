import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../app.css'

import {  Carousel } from 'antd';

class Slider extends React.Component {
  render(){
    return( 
<div style={{ background: '#fff', padding: 24 }}>
<Carousel afterChange={this.onChange}>
    		<div><img src = {require('../img/one.JPG')}  height = "766px" width = "1150px"/></div>
    		<div><img src = {require('../img/two.JPG')}  height = "766px" width = "1150px"/></div>
    		<div><img src = {require('../img/three.JPG')}  height = "766px" width = "1150px"/></div>
    		<div><img src = {require('../img/four.JPG')}  height = "766px" width = "1150px"/></div>
  		</Carousel>

</div>
  		)
}
}

export default Slider