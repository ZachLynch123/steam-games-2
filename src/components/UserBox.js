import React from "react";
import { connect } from 'react-redux';
import fetchUser from '../actions/fetchUser';
import Card from 'react-bootstrap/Card'

export class UserBox extends React.Component {


  render() {
    const user = this.props.user.user.user
    return (
      <Card style={{ width: '7rem' }}>
        <Card.Img variant="top" src={ `${user.avatarmedium}` } alt="no pic?" />
         <Card.Title>{user.personaname}</Card.Title>
        </Card>
    )
  }
}

const mapStateToProps = user => {
  return {
    user 
  }
}

export default connect(mapStateToProps, {fetchUser})(UserBox);