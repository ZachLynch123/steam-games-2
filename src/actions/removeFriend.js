const removeFriend = friend => {
    return {
        type: "REMOVE_FRIEND",
        payload: friend
    }
}

export default removeFriend