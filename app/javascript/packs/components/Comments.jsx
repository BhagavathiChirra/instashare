import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Comments extends Component{
  constructor(props){
    super(props);
  }

  render(){
    console.log("comments:", this.props.comments);

    return (
      <div id="comments">
      <ul>
      {
        this.props.comments.map(
          comment =>
          <li key={comment.id}>
            {comment.content}
          </li>
        )
      }
      </ul>
      </div>
    );
  }

}

export default Comments;
