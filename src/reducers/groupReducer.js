const groupReducer = (state={group: []}, action) => {

    switch(action.type) {
        case "FETCH_GROUP":
            return{
                group: action.payload
            }

        case "ADD_TO_GROUP":
            return {
                group: [...state.group, action.payload]
            }
        
        case "REMOVE_FROM_GROUP":
            const newGroup = state.group.filter(group => group.id !== action.payload)
            return {
                group: newGroup
            }
        
        case "POST_GROUP":
            return {
                group: action.payload
            }
        default: 
        return state
    }


}

export default groupReducer;