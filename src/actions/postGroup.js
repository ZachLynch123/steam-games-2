
const postGroup = (group) => {
    return (dispatch) => {
        const options = {
            method: "POST", 
            headers: {
                "Content-type": "application/json", 
                "accept": "application/json"
            }, 
            body: JSON.stringify({group})
        }
        fetch(`http://localhost:3000/friend_games`, options)
        .then(res => res.json())
        .then(group => {
            dispatch({type: "POST_GROUP", payload: group})
        })
    }
}

export default postGroup