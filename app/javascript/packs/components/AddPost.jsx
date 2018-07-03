import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class AddPost extends Component{
  constructor(props){
    super(props);

    this.state = {
      caption: '',
      image: null
    }
    this._handleSubmit = this._handleSubmit.bind( this );
    this._handleCaptionChange = this._handleCaptionChange.bind( this );
    this._handleFileChange = this._handleFileChange.bind( this );
  }

  _handleCaptionChange( event ){
    this.setState({caption: event.target.value});
  }

  _handleFileChange( event ){
    this.setState({image: event.target.files[0] });
  }

  _handleSubmit( event ){
    event.preventDefault();

    var formData = new FormData();
    formData.append('image', this.state.image);
    formData.append('caption', this.state.caption);

    // const SERVER_URL = "/posts";
    console.log(this.state);
    axios.post( '/posts', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    .then( response => {
      console.log(response);
      if(response.data.status === "success"){
        this.props.history.push("/");
      }
    })
    .catch(console.warn);

  }


  render(){
    return(
      <Form onSubmit={ this._handleSubmit } id="add_post_form">
        <FormGroup>
          <Label for="captionText">Caption: </Label>
          <Input type="textarea" name="text" id="captionText" onChange={ this._handleCaptionChange }/>
          <Label for="labelFile">File</Label>
          <Input type="file" name="file" id="imgFile" onChange={ this._handleFileChange }/>
        </FormGroup>
        <Button>Add Post</Button>
      </Form>
    );
  }
}

export default AddPost;
