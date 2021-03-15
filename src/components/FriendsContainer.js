import React from "react";
import Friend from "../components/Friend";
import { connect } from 'react-redux';
import fetchFriends from '../actions/fetchFriends';
import addToGroup from '../actions/addToGroup';
import fetchGroup from '../actions/fetchGroup'
import fetchUser from '../actions/fetchUser'
import removeFriend from '../actions/removeFriend';

class FriendsContainer extends React.Component {


  constructor(props){
    super(props)
    this.state = {
        counter: 0
    }
}

  componentDidMount() {
    this.props.fetchFriends(window.location.href.split("/").pop())
  }

  handleClick = friend => {
    // add's clicked friend to friend group
    this.props.addToGroup(friend)
  }

  upvote = () => {
    // better way to set state  
    // write a blog post about redux, something specific like redux flow, or one specific thing about thunk, include code snippits
    // write the README.MD
    this.setState(prevState => {
      return {counter: prevState.counter + 1}
    })

    console.log(this.state.counter);
  }

  
  render() {
    
    const friends = this.props.friends.friend.friends
    while (this.props.friends.friend.friend === 1) {
      return (<p>Loading..</p>)
    }
    return (
      <div className="friends-container">
          {friends.map(friend => {
            return <div>
              <Friend friend={friend} onClick={() => this.handleClick(friend)} upvote={this.upvote} counter ={this.state.counter}/>
              </div>
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