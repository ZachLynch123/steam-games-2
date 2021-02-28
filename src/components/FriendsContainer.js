import React from "react";
import Friend from "../components/Friend";
import { connect } from 'react-redux';
import fetchFriends from '../actions/fetchFriends';
import addToGroup from '../actions/addToGroup';
import fetchGroup from '../actions/fetchGroup'
import fetchUser from '../actions/fetchUser'
import removeFriend from '../actions/removeFriend';

class FriendsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchFriends(window.location.href.split("/").pop())
  }

  handleClick = friend => {
    // add's clicked friend to friend group
    this.props.addToGroup(friend)
    // this.props.removeFriend(friend)
    // console.log(this.props);
  }

  
  render() {
    
    const friends = this.props.friends.friend.friends
    while (this.props.friends.friend.friend === 1) {
      return (<p>Loading..</p>)
    }
    return (
      <div className="friends-container">
          {friends.map(friend => {
            return <Friend friend={friend} onClick={() => this.handleClick(friend)} />
          })}
      </div>
    );
  }
}

const mapStateToProps = (friends, group) => {
  return {
    friends, group
  }
}





export default connect(mapStateToProps, {fetchFriends, fetchUser, addToGroup, fetchGroup, removeFriend}) (FriendsContainer);