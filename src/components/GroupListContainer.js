import React from 'react'
import addToGroup from '../actions/addToGroup';
import postGroup from '../actions/postGroup';
import fetchGames from '../actions/fetchGames';
import { useSelector, connect } from 'react-redux'
import Group from './Group';

const GroupListContainer = (props) => {
    const group = useSelector(state => state.group.group)
    const games = useSelector(state => state.games)
    const handleClick = () => { 
        if (group.length == 0) {
            alert("Please add people to group before searching")
        } else {
            props.postGroup(group)

        } 
        //props.fetchGames()
    }
    
    return (
        <div>
            {group.map(friend => {return <Group friend={friend}/>})}
            <button onClick={handleClick}>Search</button>
        </div>
    )
}

const mapStateToProps = group => {
    return {
        group
    }
}

export default connect(mapStateToProps, {addToGroup, postGroup, fetchGames}) (GroupListContainer)

