const gameReducer = (state={games: []}, action) => {
    switch(action.type) {
        case "FETCH_GAMES":
            return{
                games: action.payload
            }
        case "POST_GROUP":
            return {

            }

        default:
            return state
    }




}

export default gameReducer