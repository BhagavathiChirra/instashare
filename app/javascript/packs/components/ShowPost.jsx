import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';
import {Image} from 'cloudinary-react';
import TimeAgo from 'react-timeago';


class ShowPost extends Component{
  constructor(props){
    super(props);
    this.state = {
      post: ''
    }

  }

  _handleClick(event){
    this.props.history.push(`/posts/${this.props.match.params.id}/edit`);
  }

  componentWillMount(){
    const URL = `/posts/${this.props.match.params.id}`
    axios.get(URL)
    .then( res => {
      console.log('RES', res.data)
      this.setState({post: res.data})
    });
  }

  render(){
    // console.log(this.props.match.params.id);
    return(
      <div id="show_post_div">
        <div>
          <span>Posted: <TimeAgo date={this.state.post.created_at} /></span>
        </div>
        <br/>
        <Image cloudName="dvlga6vu4" publicId={this.state.post.image} width="500" crop="scale" className="post_show_image"/>
        <br/>
        {this.state.post.caption}
        <br/>
        <br/>
        <button id="edit_post" onClick={this._handleClick}>Edit Post</button>

      </div>
    );
  }
}

export default ShowPost;
