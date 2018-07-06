import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios';
import {HashRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Home from './Home';
import AddPost from './AddPost';
import ShowPost from './ShowPost';
import Profile from './Profile';
import Users from './Users';
import Following from './Following';


import { Navbar } from 'reactstrap';

class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      user: null
    }

    this.postAdded = this.postAdded.bind( this );
  }

  componentWillMount(){
    axios.get('/current_user')
    .then( res => {
      this.setState({user: res.data})
    });
  }

  postAdded( post ){
    // console.log('POST ADDED (in App.js): ', post);
    const userCopy = Object.assign({}, this.state.user);
    userCopy.posts.push( post );
    this.setState({ user: userCopy });
  }

  render(){
    const posts = this.state.user ? this.state.user.posts : [];
    const routes = (
      <Router>
        <div>
        <div>
          <Navbar color="light" light expand="md">
            <Link to="/">Home</Link> &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/posts/new">New Post</Link> &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/users">Users</Link> &nbsp;&nbsp;&nbsp;&nbsp;

          </Navbar>
        </div>
          {/* <Route exact path="/" component={ Home } /> */}
          <Route exact path="/" render={ (props) => <Home {...props} posts={posts} /> }/>
          <Switch>
            <Route exact path="/posts/new" render={ (props) => <AddPost {...props} addedPost={this.postAdded} /> }/>
            <Route exact path="/posts/:id" component={ShowPost} />
          </Switch>

          <Route exact path="/users" component={Users} />
          <Route exact path="/users/:username"  render={ (props) => <Profile {...props} current_user={this.state.user} />} />
          {/*<Route exact path="/posts/:id/edit" component={EditPost} />*/}
        </div>
      </Router>
    );

    return (
      <div>
        { routes }
      </div>
    );
  }

}

export default App;
