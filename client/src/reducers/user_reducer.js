export default function userReducer(
    state = { 
        isLoggedIn:false,
    },     
    action) 
{
    console.log("UserReducer", action);
    switch (action.type) { 
        case "LOGIN_USER":
            return {...state, jwt: action.token, isLoggedIn:true}

        case "LOGOUT_USER":
            return { ...state, jwt: null, isLoggedIn: false}

        default:
            return state;
    }
}