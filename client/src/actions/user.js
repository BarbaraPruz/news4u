import jwt_decode from 'jwt-decode';

export function loggingIn() {
    return {
        type: 'LOGGING_IN'
    };
  }
  
export function loginUser(credentials) {
    return (dispatch) => {
        dispatch(loggingIn());

        const email = credentials.email;
        const password = credentials.password;
  
        const request = {"auth": {"email": email, "password": password}}
        const options = {
            method: 'POST',
            body: JSON.stringify(request),
            headers: {
              'Content-Type': 'application/json'
            }
        };
        console.log("Login User!",request);
        // TODO: handle error
        fetch("api/user_token", options)
            .then(res => res.json())
            .then(res => {
                console.log("have result",res);
                localStorage.setItem("jwt", res.jwt); // TODO: move to reducer?
                let id = jwt_decode(res.jwt).sub;                
                dispatch({type:"LOGIN_USER", token:res.jwt, id: id})
                dispatch(getUserPreferences(res.jwt, id))               
            });
    };
}

// TODO: don't pass token around....
export function getUserPreferences(token, id) {
    return (dispatch) => {
        console.log("Getting User Preferences, id",id);
        // TODO: handle error               
        return fetch(`/api/users/${id}`, 
                    { headers: new Headers({
                        'Authorization': `Bearer ${token}`, 
                        'Content-Type': 'application/json'
                    })})
            .then(res => res.json())
            .then(res => dispatch({type: "SET_USER_PREFERENCES", payload:res}))                
    };
}
