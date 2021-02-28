const addUser = user => {
    return (dispatch) => {
        const options = {
            method: "POST", 
            headers: {
                "Content-type": "application/json", 
                "accept": "application/json"
            }, 
            body: JSON.stringify({user})
        }
        fetch(`http://localhost:3000/users`, options)
        .then(res => res.json())
        .then(user => {
            dispatch({type: "ADD_USER", payload: user})
        })
    }
}
export default addUser