import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Comments from './Comments';
import { Container, Row, Col } from 'reactstrap';
import {Image} from 'cloudinary-react';


class Home extends Component {

  constructor(props){
    super(props);
  }

  render(){
    const posts = this.props;
    // const postsmap = this.props.posts.map(post => { post.caption })

    console.log(this.props.posts);
    return(
      <Container>
        {
          this.props.posts.map(post =>
            <Row key={post.id}>
              <Col className="text-center" lg="10" id="post_col">
              {/* <img id="post_image" src={post.image}/> */}
              <Image cloudName="dvlga6vu4" publicId={post.image} width="300" crop="scale" />

              <br/>
              {post.caption}
              <br/>
              <Comments comments={ post.comments }/>
            </Col>
            </Row>
          )
        }
      </Container>
    );
  }
}
export default Home;
