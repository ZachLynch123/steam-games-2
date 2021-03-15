import React from 'react'
export default function Friend(props) {
    const friend = props.friend;
    console.log(props.counter);
    return (
        <div>
            <img className="friend-profile" src={friend.avatarmedium} alt="no pic" onClick={props.onClick}></img>
            <p>{friend.personaname}</p>
            <button onClick={props.upvote}>+</button>
            <p>{props.counter}</p>
        </div>
    )
}
