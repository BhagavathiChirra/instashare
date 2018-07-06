import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { Button, Input } from 'reactstrap';
import {Image} from 'cloudinary-react';


class Comments extends Component{
  constructor(props){
    super(props);
    this.state = {
      comment: '',
      comments: this.props.comments
    }
    this._handleAddCommentChange = this._handleAddCommentChange.bind(this);
    this._handleClick = this._handleClick.bind(this);
    this._handleClickDelete = this._handleClickDelete.bind(this);
  }

  _handleClickDelete(e, comment){
    e.preventDefault();
    axios.delete("/comments", {
      params: {
        id: comment.id
      }
    })
    .then(response => {
      if(response.data.status === 'success'){
        // make copy of comments from state
        const copy = [...this.state.comments];
        // splice out deleted comment
        const deleteIndex = copy.indexOf( comment );
        copy.splice( deleteIndex, 1 );
        // save the spliced array back to state
        this.setState({comments: copy });
      }
    })
    .catch(console.warn)

  }
  _handleAddCommentChange(event){
    this.setState({comment: event.target.value});
  }

  _handleClick(event){
    // this.props.postId
    // post the comment to DB and add it to comments div
    axios.post( "/comments",  {
      content: this.state.comment,
      post_id: this.props.postId
    })
    .then( response => {
      console.log(response);
      if(response.data.status === "success"){
        // clear textarea and add to div
        this.setState({
          comments: [...this.state.comments, response.data.comment],
          comment: ''  // clears textarea
        });
      }
    })
    .catch(console.warn);
  }

  render(){
    return (

      <div id="comments_div">
      <div id="add_comment_div">
        <textarea rows="1" cols="55" name="comment" id="txt_Comment" onChange={ this._handleAddCommentChange } value={this.state.comment}></textarea>
        &nbsp;&nbsp;&nbsp;
        <button id="add_comment_btn" onClick={this._handleClick}>Add Comment</button>
      </div>

      <ul>
      {
        this.state.comments.map(
          (comment, index) =>
          <li key={comment.id} className="label label-default">
            <Image cloudName="dvlga6vu4" publicId={comment.user.image} width="25" crop="scale" className="comment_user_image"/>
            {comment.content}&nbsp;&nbsp;&nbsp;
          <a href="#" className="delete_comment" id={comment.id} comment={comment} onClick={(event) => this._handleClickDelete(event, comment)}>Delete?</a>
          </li>
        )
      }
      </ul>
      </div>
    );
  }

}

export default Comments;
