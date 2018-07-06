import React, {Component} from 'react';
import axios from 'axios';
import {Image, Transformation} from 'cloudinary-react';
import Posts from './Posts';

class Following extends Component{
  constructor(){
    super();
    this.state = {
      posts: ''
    }
  }
  render(){
    return(
      <h1>Following</h1>
    );
  }
}
