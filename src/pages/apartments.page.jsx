import React from 'react';

import { authenticationService } from '../services/user.service';

const fetchApartments = async () => {};
export const ApartmentsPage = () => {
    React.useEffect(() => {
        fetchApartments();
    }, []);

    return (
        <>
            <h1>This is a private route</h1>
            <p>If you are here, thats becaouse you are logged in </p>
        </>
    );
};
