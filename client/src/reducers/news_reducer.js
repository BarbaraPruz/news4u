export default function newsReducer(
    state = { 
        headlines: [],
        allSources: [],
        articles: []
    },     
    action) 
{
    console.log("NewsReducer", action);
    switch (action.type) { 
        case "GET_HEADLINES":
        console.log("get headlines",action.payload);
            return {...state, headlines: action.payload}  

        case "GET_NEWS_SOURCES":
            console.log("get news sources");
            // NEWSAPI uses id field for it's key value.  But to make this
            // consistent with data received from Rails, the id field is renamed news_source_id
            let work = action.payload.map ( (s) => { 
                s.news_source_id=s.id;
                delete s["id"];
                return s;
            });
            return {...state, allSources: work}  
    
            
        case "SEARCH_NEWS":   
            return {...state, articles: action.payload}
            
        default:
            return state;
    }
}