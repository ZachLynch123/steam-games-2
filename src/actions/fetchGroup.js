const fetchGroup = group => {
    return {
        type: "FETCH_GROUP",
        payload: group
    }
}

export default fetchGroup;