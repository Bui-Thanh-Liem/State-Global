const initState = {
    edit: {
        user: "Bùi Thanh Liêm",
        age: 23,
        about: "I am fullstack developer",
        avatar: 'https://i.redd.it/ksmb0m02ppy51.png',
        theme: "#FF0000",
    }
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case "updateData":
            return {
                ...state,
                edit:action.payload
            }
            
        default:
            return state;
    }
}

export default reducer;