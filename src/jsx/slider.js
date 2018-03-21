import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import {  Carousel } from 'antd';

class Slider extends React.Component {
  render(){
    return( 
<div style={{ background: '#fff', padding: 24 }}>
<Carousel afterChange={this.onChange}>
    		<div><img src = "https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg"  height = "360px" width = "1150px"/></div>
    		<div><h3>2</h3></div>
    		<div><h3>3</h3></div>
    		<div><h3>4</h3></div>
  		</Carousel>

</div>
  		)
}
}

export default Slider