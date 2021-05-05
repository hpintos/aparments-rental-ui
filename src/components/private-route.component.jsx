import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ApplicationContext } from '../contexts/application-context';

export const PrivateRoute = ({ component: Component, roles, children, ...rest }) => {
    const { currentUser } = React.useContext(ApplicationContext);
    return (
        <Route
            {...rest}
            render={(props) => {
                if (!currentUser) {
                    // not logged in so redirect to login page with the return url
                    return <Redirect to={{ pathname: '/login' }} />;
                }
                // check if route is restricted by role
                if (roles && roles.indexOf(currentUser.role) === -1) {
                    // role not authorised so redirect to home page
                    alert('Not authorized');
                    return <Redirect to={{ pathname: '/' }} />;
                }

                // authorised so return component
                return <Component {...props} />;
            }}
        />
    );
};
