import React, { useState, useEffect, useCallback } from "react";

let logoutTimer;

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {}
});

const calculateRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();
    
    const remainingDuration = adjExpirationTime - currentTime;
  
    return remainingDuration;
};

const retrieveStoredToken = () => {
    const localToken = localStorage.getItem('token');
    const localExpirationDate = localStorage.getItem('expirationTime');
  
    const remainingTime = calculateRemainingTime(localExpirationDate);
  
    if (remainingTime <= 3600) {
      localStorage.removeItem('token');
      localStorage.removeItem('expirationTime');
      return null;
    }
    return {
        token: localToken,
        duration: remainingTime,
    }
};
    
  

export const AuthContextProvider = (props) => {

    const localTokenData = retrieveStoredToken();
    
    let initToken;
    if (localTokenData) {
        initToken = localTokenData.token;
    }

    const [token, setToken] = useState(initToken);

    const userIsLoggedIn = !!token;

    const loginHandler = (token, expirationTime) => {
        setToken(token);
        localStorage.setItem('token', token);
        localStorage.setItem('expirationTime', expirationTime);
    
        const remainingTime = calculateRemainingTime(expirationTime);
    
        logoutTimer = setTimeout(logoutHandler, remainingTime);
    };

    const logoutHandler = useCallback(() => {
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');

        if (logoutTimer) {
            clearTimeout(logoutTimer);
        }
    }, []);

    useEffect(() => {
        if (localTokenData) {
          console.log(localTokenData.duration);
          logoutTimer = setTimeout(logoutHandler, localTokenData.duration);
        }
    }, [localTokenData, logoutHandler]);

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    };
    
    return <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext;

