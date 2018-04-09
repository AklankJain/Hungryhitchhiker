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
    		<div><img src ="https://s3.ap-south-1.amazonaws.com/hungry-media/home-page-photos/18156636_10212870205168957_6670301087148277348_o.jpg"   width = "100%"/></div>
    		<div style={{ }}><img src ="https://s3.ap-south-1.amazonaws.com/hungry-media/home-page-photos/IMG_20171112_122857.jpg" height = "100%"  /></div>
    		<div><img src = "https://s3.ap-south-1.amazonaws.com/hungry-media/home-page-photos/IMG_20170713_170403.jpg"  height = "100%"/></div>
    		<div><img src = "https://s3.ap-south-1.amazonaws.com/hungry-media/home-page-photos/DSC_5255.JPG"  width = "100%"/></div>
    		<div><img src = "https://s3.ap-south-1.amazonaws.com/hungry-media/home-page-photos/DSC_0180.JPG"  width = "100%"/></div>
    		<div><img src = "https://s3.ap-south-1.amazonaws.com/hungry-media/home-page-photos/DSC_0134.JPG"  width = "100%"/></div>
    		<div><img src = "https://s3.ap-south-1.amazonaws.com/hungry-media/home-page-photos/23970151_902959716529463_5847621355305959424_n.jpg"  width = "100%"/></div>
    		<div><img src = "https://s3.ap-south-1.amazonaws.com/hungry-media/home-page-photos/23507116_1754083227937188_8963694221034782720_n.jpg"  height = "100%"/></div>
    		<div><img src = "https://s3.ap-south-1.amazonaws.com/hungry-media/home-page-photos/18299919_2056935194542227_8228411174467665920_n.jpg"  height = "100%"/></div>
  		</Carousel>

</div>
  		)
}
}

export default Slider