import React, {Component} from 'react';
import axios from 'axios';
import {Image, Transformation} from 'cloudinary-react';
import Posts from './Posts';

class Following extends Component{
  constructor(){
    super();
    this.state = {
      posts: []
    }
  }
  componentWillMount(){
    axios.get("/following_posts")
    .then( response => {
      if(response.data){
        this.setState({posts: response.data})
      }
    })
    .catch( err => console.warn('error loading user', err));
  }
  render(){
    return(
      <div>
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}
export default Following;
