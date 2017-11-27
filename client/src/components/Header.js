import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {

  constructor(props){
    super(props);
  }

  renderHeader(){

    switch (this.props.auth) {

      case null:
        return <li>Logging in ...</li>;;

      case false:
        return <li><a href="/auth/google">Login With Google</a></li>;

      default:
        return <li><a href="/api/logout">Logout</a></li>;

    }
  }

  render(){

    return ( <nav>
              <div className="nav-wrapper">
                <Link className="left brand-logo" to={this.props.auth ? '/surveys': '/' }> Emaily! </Link>
                <ul className="right">
                  {this.renderHeader()}
                </ul>
              </div>
             </nav> );
  }
}

function mapStateToProps(state){
  console.log('state.auth', state.auth);
  return {auth: state.auth};
}

export default connect(mapStateToProps)(Header);
