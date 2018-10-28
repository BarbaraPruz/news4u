export function gettingHeadlines() {
    return {
        type: 'GETTING_HEADLINES'
    };
  }
  

export function getHeadlines(newsSources) {
    let newsSourceIds = newsSources.map( source => source.news_source_id );
    console.log("get headlines",newsSourceIds)
    return (dispatch) => {
        dispatch(gettingHeadlines());
        // TODO: handle error
        // TODO: protect API key?
        const apiKey = 'c538607ebe2d47a1a6a7561178e25f37';
        const params = 'sources='+newsSourceIds.join();
        let uri = "https://newsapi.org/v2/top-headlines?"+params+"&apiKey="+apiKey;
        console.log("going to get headlines",uri);
        fetch(uri)
          .then(response => response.json())
          .then(data => dispatch({type:"GET_HEADLINES", payload:data.articles}));  
    };
}

