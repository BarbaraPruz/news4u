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
            return {...state, jwt: action.token, id: action.id}
           
        case "SET_USER_PREFERENCES":
            console.log("Set User Preferences",action.payload)
            // TODO: confirm payload id matches state id?
            return {...state, isLoggedIn:true, newsSources: action.payload.news_sources}

        case "LOGOUT_USER":
            return { ...state, jwt: null, id: 0, isLoggedIn: false}

        default:
            return state;
    }
}