import React from 'react';
import { Redirect, Route } from 'react-router';


const PrivateRoute = ({ children, ...rest }) => {
    // const { loggedInUser} = useContext(UserContext);
    const data = localStorage.getItem('data');
    return (
        <Route
            {...rest}
            render={({ location }) =>
            data ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};
export default PrivateRoute;