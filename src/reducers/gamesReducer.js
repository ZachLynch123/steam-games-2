

const gameReducer = (state={games: [], loading: true}, action) => {
    switch(action.type) {
        case "FETCH_GAMES":
            if (action.payload.length > 0) {
                console.log(action.payload);
                return {
                    games: action.payload,
                    loading: false
                }
            }
        default:
            return state
    }




}

export default gameReducer