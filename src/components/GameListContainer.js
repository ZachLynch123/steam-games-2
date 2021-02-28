import React, { Component } from 'react'
import { connect } from 'react-redux';
import fetchGames from '../actions/fetchGames';
import GameList from './GameList'

class GameListContainer extends Component {

    componentDidMount(){
        this.props.fetchGames()
    }
    
    render() {
        const games = this.props.games.games
        while (this.props.games.games === undefined || this.props.games.games.lenght == 0) {
            return <p>select friends to get started</p>
        }
        return (
            <div>
                {games.games.map(game => <GameList game={game} />)}
            </div>
        )
    }
}


const mapStateToProps = games => {
    return{
        games
    }
}

export default connect(mapStateToProps, {fetchGames}) (GameListContainer)

