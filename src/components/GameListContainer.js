import React from 'react'
import { connect, useSelector } from 'react-redux'
import fetchGames from '../actions/fetchGames';
import Gamelist from './GameList'

const GameListContainer = (props) => {
    const state = useSelector(state => state.games) 

    const handleClick = () => {  
        
        console.log(state);
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
        </div>
    )
}

const mapStateToProps = games => {
    return {
        games
    }
}

export default connect(mapStateToProps, {fetchGames}) (GameListContainer)



