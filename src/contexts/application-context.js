import React from 'react';

export const ApplicationContext = React.createContext({
    currentUser: null,
    setCurrentUser: () => {
        throw new Error('Not set yet');
    },
});
