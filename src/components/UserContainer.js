import React from "react";
import { connect } from 'react-redux';
import fetchGroup from "../actions/fetchGroup";
import fetchUser from '../actions/fetchUser';
import FriendsContainer from "./FriendsContainer";
import GroupListContainer from "./GroupListContainer";
import GameListContainer from './GameListContainer';
import UserBox from './UserBox'

export class UserContainer extends React.Component {

  componentDidMount(){
    this.props.fetchUser(this.props.location.pathname.split("/").pop())
  }

 

  render() {
    const user = this.props.user.user.user
    return (
        <div>
            <UserBox user={user}/> 
            <FriendsContainer />
            <GroupListContainer />
            <GameListContainer />
        </div>
      
    )
  }
}

const mapStateToProps = user => {
  return {
    user 
  }
}

export default connect(mapStateToProps, {fetchUser, fetchGroup})(UserContainer);