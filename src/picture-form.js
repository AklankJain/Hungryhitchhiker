import React from 'react';
import ReactDOM from 'react-dom';

class Picture extends React.Component {

  handleSubmit = (e) => {
  		var username = document.getElementById("file-input").value;
        console.log(username);
      };
  render(){
    return( 
      <div id = "picture-form">
      <input type="file" id="file-input" />
<p id="status">Please select a file</p>
<img id="preview" src="" height = "50px"  width= "50px" />
<form onSubmit={this.handleSubmit} >
  <input type="hidden" id="avatar-url" name="avatar-url" value="" />
  <input type="text" name="username" placeholder="Username" /><br/>
  <input type="text" name="full-name" placeholder="Full name" /><br/><br/>
  <input type="submit" value="Update profile" />
</form>   
     </div>
   )
}
}

export default Picture