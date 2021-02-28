const fetchGames = () => {
    return (dispatch) => {
        fetch(`http://localhost:3000/friend_games`)
        .then(res => res.json())
        .then(game => {
            console.log(game);
            dispatch({type:"FETCH_GAMES", payload: game})
        })
    }
}

export default fetchGames
