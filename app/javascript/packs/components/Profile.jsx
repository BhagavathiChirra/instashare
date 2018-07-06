import React, {Component} from 'react';
import axios from 'axios';
import {Image, Transformation} from 'cloudinary-react';
import Posts from './Posts';

class Profile extends Component{
  constructor(){
    super();
    this.state = {
      user: {}
    }
    this._handleClick = this._handleClick.bind(this);
  }
  componentWillMount(){
    axios.get(`/users/${this.props.match.params.username}`)
    .then( response => {
      if(response.data.name){
        this.setState({user: response.data})
      }
    })
    .catch( err => console.warn('error loading user', err));
  }

  _handleClick(){
    axios.post( "/follow",  {
      name: this.state.user.name
    })
    .then( response => {
      //updateButton
      if(response.data.status === 'follow'){
        const userCopy = Object.assign({}, this.state.user);
        userCopy.follower_ids.push( this.props.current_user.id );
        this.setState({ user: userCopy });
      }else if(response.data.status === 'unfollow'){
        const userCopy = Object.assign({}, this.state.user);
        const deleteIndex = userCopy.follower_ids.indexOf( this.props.current_user.id );
        userCopy.follower_ids.splice(deleteIndex, 1);
        this.setState({user: userCopy});
      }

    })
    .catch(console.warn);
  }

  currentUserIsFollowing(){
    // return 'Follow';
    if(this.state.user.follower_ids.includes( this.props.current_user.id )){
      return 'Unfollow';
    } else {
      return 'Follow';
    }
  }

  render(){
    console.log("user",this.state.user.name);
    console.log("cuurent user",this.props.current_user);

    if (!this.state.user.name || !this.props.current_user){
      return <p>Loading...</p>;
    }

    return(
      <div id="profile_div">
        <div id="profile_top_div">
          <Image cloudName="dvlga6vu4" publicId={this.state.user.image} width="150" className="profile_user_image">
            <Transformation width="150" height="150" radius="max" crop="fill" />
          </Image>
          <span className="span_profile_name">{this.state.user.name}</span>
            <button id="follow_btn" onClick={this._handleClick}>
              { this.currentUserIsFollowing() }
            </button>
        </div>
        <Posts posts={this.state.user.posts} />
      </div>
    );
  }
}

export default Profile;
