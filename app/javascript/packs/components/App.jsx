import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

import Home from './Home';
import AddPost from './AddPost';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      user: null
    }

  }

  componentWillMount(){
    axios.get('/current_user')
    .then( res => {
      // console.log('RES', res.data)
      this.setState({user: res.data})
    });
  }

  render(){
    const posts = this.state.user ? this.state.user.posts : [];
    const routes = (
      <Router>
        <div>
        <div>
          <Navbar color="light" light expand="md">
            <Link to="/">Home</Link> &nbsp;|&nbsp;
            <Link to="/posts/new">New Post</Link>
          </Navbar>
        </div>
          {/* <Route exact path="/" component={ Home } /> */}
          <Route exact path="/" render={ (props) => <Home {...props} posts={posts} /> }/>
          <Route exact path="/posts/new" component={AddPost} />
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
