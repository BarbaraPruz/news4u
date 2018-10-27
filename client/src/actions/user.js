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
                dispatch({type:"LOGIN_USER", token:res.jwt})
            });
    };
}
