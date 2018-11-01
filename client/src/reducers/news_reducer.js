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
            return {...state, headlines: action.payload}  

        case "GET_NEWS_SOURCES":
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
            
        case "SEARCH_CLEAR":
            return {...state, articles: [] }

        default:
            return state;
    }
}