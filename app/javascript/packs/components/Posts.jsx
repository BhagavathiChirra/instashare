import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Comments from './Comments';
import { Container, Row, Col } from 'reactstrap';
import {Image} from 'cloudinary-react';
import TimeAgo from 'react-timeago';

class Posts extends Component {

  constructor(props){
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }
  // Show post component
  _handleClick(event){
    console.log(event.target.id);
    this.props.history.push(`/posts/${event.target.id}`);
  }

  render(){
    // const posts = this.props;
    // const postsmap = this.props.posts.map(post => { post.caption })

    console.log('posts inside <Home>', this.props.posts);
    return(
      <Container>
        {
          this.props.posts.map(post =>
            <Row key={post.id}>
              <Col className="text-center" lg="10" id="post_col">
              {/* <img id="post_image" src={post.image}/> */}
              <div className="post_top_div">
                <span className="post_left_div">{post.user.name}</span>
                <span className="post_right_div"><TimeAgo date={post.created_at} /></span>
              </div>
              <br/>
              <Image cloudName="dvlga6vu4" publicId={post.image} width="500" crop="scale" className="post_home_image" id={post.id} onClick={this._handleClick}/>
              <br/>
                <span id="caption_span">{post.caption}</span>
              <br/>
              <Comments comments={ post.comments } postId={post.id}/>
            </Col>
            </Row>
          )
        }
      </Container>
    );
  }
}
export default Posts;
