import React from 'react'
import { connect, useSelector } from 'react-redux'
import fetchGames from '../actions/fetchGames';
import addToGroup from '../actions/addToGroup'
import Gamelist from './GameList'

const GameListContainer = (props) => {
    const state = useSelector(state => state.games) 
    const group = useSelector(state => state.group.group)

    const handleClick = () => {  
        if (group.length == 0) {
            alert("Please add friends to group before searching for games")
        } else {
            props.fetchGames()
        }
    }
    while (state.loading) {
        return(
            <div>
                <p>Select friends to search for games</p>
                <button onClick={handleClick}>getGames</button>
            </div>
        )
    }
    return (
        <div>
            {state.games.map(game => <Gamelist game={game} />)}
            <button onClick={handleClick}>getGames</button>
        </div>
    )
}

const mapStateToProps = games => {
    return {
        games
    }
}

export default connect(mapStateToProps, {fetchGames, addToGroup}) (GameListContainer)



