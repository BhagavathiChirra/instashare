import React, {Component} from 'react';
import axios from 'axios';
import {Image} from 'cloudinary-react';
import Posts from './Posts';

class Profile extends Component{
  constructor(){
    super();
    this.state = {
      user: {}
    }
  }
  componentWillMount(){
    axios.get(`/users/${this.props.match.params.username}`)
    .then( response => {
      this.setState({user: response.data})
    });
  }
  render(){

    if (!this.state.user.name){
      return <p>Loading...</p>;
    }

    return(
      <div id="profile_div">
        <div id="profile_top_div">
          <Image cloudName="dvlga6vu4" publicId={this.state.user.image} width="150" crop="scale" className="profile_user_image"/>

          <span className="span_profile_name">{this.state.user.name}</span>
          <button id="follow_btn" onClick={this._handleClick}>Follow</button>
        </div>
        <Posts posts={this.state.user.posts} />
      </div>
    );
  }
}

export default Profile;


// <div id="profile_div">
//   <div id="profile_top_div">
//     <div>
//       <button id="follow_btn" onClick={this._handleClick}>Follow</button>
//     </div>
//     <div>
//       <span>{this.state.user.name}</span>
//       <br/>
//       <Image cloudName="dvlga6vu4" publicId={this.state.user.image} width="150" crop="scale" className="profile_user_image"/>
//       <br/>
//     </div>
//   </div>
//   <Posts posts={this.state.user.posts} />
// </div>
