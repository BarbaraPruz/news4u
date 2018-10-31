// TODO: protect API key?
const apiKey = 'c538607ebe2d47a1a6a7561178e25f37';

export function gettingHeadlines() {
    return {
        type: 'GETTING_HEADLINES'
    };
  }
  

export function getHeadlines(newsSources) {
    let newsSourceIds = newsSources.map( source => source.news_source_id );
    if (newsSourceIds.length === 0)
        newsSourceIds.push("cnn");
    console.log("get headlines",newsSourceIds)
    return (dispatch) => {
        dispatch(gettingHeadlines());
        // TODO: handle error
        const params = 'sources='+newsSourceIds.join();
        let uri = "https://newsapi.org/v2/top-headlines?"+params+"&apiKey="+apiKey;
        console.log("going to get headlines",uri);
        fetch(uri)
          .then(response => response.json())
          .then(data => dispatch({type:"GET_HEADLINES", payload:data.articles}));  
    };
}

export function gettingNewsSources() {
    return {
        type: 'GETTING_NEWS_SOURCES'
    }
}

export function getNewsSources() {
    return (dispatch) => {
        dispatch(gettingNewsSources());
        // TODO: handle error
        let uri = "https://newsapi.org/v2/sources?language=en&apiKey="+apiKey;
        console.log("going to get news sources",uri);
        fetch(uri)
          .then(response => response.json())
          .then(data => dispatch({type:"GET_NEWS_SOURCES", payload:data.sources}));  
    };
}

export function searchingNews() {
    return {
        type: 'SEARCHING_NEWS'
    };
  }
  

export function searchNews(newsSources,searchParams) {
    let newsSourceIds = newsSources.map( source => source.news_source_id );
    let query=searchParams.topic;
    return (dispatch) => {
        dispatch(gettingHeadlines());
        // TODO: handle error
        const sources = '&sources='+newsSourceIds.join();
        let uri = "https://newsapi.org/v2/everything?q="+query+sources+"&apiKey="+apiKey;
        console.log("going to search",uri);
        fetch(uri)
          .then(response => response.json())
          .then(data => dispatch({type:"SEARCH_NEWS", payload:data.articles}))  
    };
}