const fetchGames = () => {
    return (dispatch) => {
        console.log("running");
        fetch("http://localhost:3000/friend_games")
        .then(res => res.json())
        .then(games => {
            dispatch({type: "FETCH_GAMES", payload: games})
        })
        .catch(error => console.error(error))
    }
}

export default fetchGames