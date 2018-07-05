
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {Image} from 'cloudinary-react';


class Users extends Component{
  constructor(){
    super();
    this.state = {
      users: []
    }
    this._handleClick = this._handleClick.bind(this);
  }
  componentWillMount(){
    axios.get('/users')
    .then( response => {
      this.setState({users: response.data})
    });
  }

  _handleClick(event, username){
    // console.log('event', `/users/${username}`);
    this.props.history.push(`/users/${username}`);
  }

  render(){
    return(
      <div id="users_div">
        <ul>
          {
            this.state.users.map(
              user =>
                <li key={user.name}>
                  <Link to={`/users/${user.name}`}>
                    <Image cloudName="dvlga6vu4" publicId={user.image} width="30" crop="scale" className="comment_user_image"/>&nbsp;&nbsp;
                    {user.name}
                  </Link>
                </li>
            )
          }
        </ul>
      </div>

    );
  }
}

export default Users;
