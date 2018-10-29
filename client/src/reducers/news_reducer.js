export default function newsReducer(
    state = { 
        headlines: [],
        allSources: []
    },     
    action) 
{
    console.log("NewsReducer", action);
    switch (action.type) { 
        case "GET_HEADLINES":
        console.log("get headlines",action.payload);
            return {...state, headlines: action.payload}  

        case "GET_NEWS_SOURCES":
            console.log("get news sources",action.payload);
                return {...state, allSources: action.payload}  
    
        default:
            return state;
    }
}