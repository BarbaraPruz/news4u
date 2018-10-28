export default function newsReducer(
    state = { 
        headlines: [],
    },     
    action) 
{
    console.log("NewsReducer", action);
    switch (action.type) { 
        case "GET_HEADLINES":
        console.log("get headlines",action.payload);
            return {...state, headlines: action.payload}  

        default:
            return state;
    }
}