const fetchUser = user => {
    return (dispatch) => {
        String(user)
        console.log("C");
        fetch(`http://localhost:3000/users/${user}`)
    .then(res => res.json())
    .then(user => {
        console.log("D");
        dispatch({type:"FETCH_USER", payload: user})
    })
    }
}

export default fetchUser;