const  friendReducer = (state={friend: 1}, action) => {

    switch(action.type) {
        case "FETCH_FRIENDS":
            return {
                friends: action.payload
            }
        case "REMOVE_FRIEND":
            const newFriendList = state.friends.filter(friend => friend.id !== action.payload)
            return {
                friends: action.payload
            }
        default:
            return state
    }
}

export default friendReducer;

