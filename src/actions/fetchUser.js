const fetchUser = user => {
    return (dispatch) => {
        String(user)
        fetch(`http://localhost:3000/users/${user}`)
    .then(res => res.json())
    .then(user => {
        dispatch({type:"FETCH_USER", payload: user})
    })
    }
}

export default fetchUser;