import React from 'react';
import ReactDOM from 'react-dom';
import ScriptTag from 'react-script-tag';

class Script extends React.Component {

  render(){

  	{
  	(function(d, s, id) {
  		console.log('ksjdnlksdvlkdsnvlskdvn')
  var js, fjs = d.getElementsByTagName(s)[0];
  //if (d.getElementById(id)) return;
  console.log('hilo')
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.12&appId=628293357321818&autoLogAppEvents=1';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'))
  	};

    return (<p></p>);
    }
  		}


  export default Script