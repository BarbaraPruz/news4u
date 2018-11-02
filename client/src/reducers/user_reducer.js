export default function userReducer(
    state = { 
        isLoggedIn:false,
        newsSources: []
    },     
    action) 
{
    console.log("UserReducer", action);
    switch (action.type) { 
        case "LOGIN_USER":
        // NOTE: not setting isLoggedIn until we get the users preferences
            return {...state, jwt: action.token, id: action.id}
           
        case "SET_USER_PREFERENCES":
            // TODO: confirm payload id matches state id?
            return {...state, isLoggedIn:true, newsSources: action.payload.news_sources}

        case "UPDATE_USER_PREFERENCES":
            return {...state, newsSources: action.payload.news_sources}

        case "LOGGING_OUT":  // NOTE: we immediately want screen to go to login.  Meanwhile, sending API logout.
            return { ...state, jwt: null, id: 0, isLoggedIn: false}

        default:
            return state;
    }
}