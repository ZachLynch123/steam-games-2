import React from "react";
import { connect } from 'react-redux';
import fetchGroup from "../actions/fetchGroup";
import fetchUser from '../actions/fetchUser';
import FriendsContainer from "./FriendsContainer";
import GroupListContainer from "./GroupListContainer";
import GameListContainer from './GameListContainer';
import UserBox from './UserBox'
import { Container } from "react-bootstrap";

export class UserContainer extends React.Component {

  componentDidMount(){
    console.log("A");
    this.props.fetchUser(this.props.location.pathname.split("/").pop())
    console.log("B");
  }
  render() {
    const user = this.props.user.user.user
    const loading = this.props.user.user.loading
    if (!loading) {
      return (
        <div className="main-container">
          <div>
            <UserBox user={user}/> 
          </div>
            <div>
            <FriendsContainer />
          </div>
          <div>
            <GroupListContainer />
          </div>
          <div>
            <GameListContainer />
          </div>
        </div>
      )
    } else {
      return(
        <div>
          <p>Loading...</p>
        </div>
      )
    }
      
  }
}

const mapStateToProps = user => {
  return {
    user 
  }
}

export default connect(mapStateToProps, {fetchUser, fetchGroup})(UserContainer);