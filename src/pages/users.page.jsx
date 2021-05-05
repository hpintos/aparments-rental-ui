import React from 'react';

import { userService } from '../services/user.service';
import { Role } from '../utlils/role';

export const UsersPage = () => {
    const [usersList, setUsersList] = React.useState([]);

    const [selectedUser, setselectedUser] = React.useState();

    React.useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const response = await userService.getAll();
        console.log(response);
        setUsersList(response);
    };

    const onFormSubmit = async (e) => {
        // setError(null);
        // e.preventDefault();
        // try {
        //     const user = await authenticationService.login(email, password);
        //     setCurrentUser(user);
        //     if (user.role === 'Admin') {
        //         history.push('/users');
        //     } else {
        //         history.push('/');
        //     }
        // } catch (error) {
        //     setError(error);
        //     setPassword('');
        // }
    };

    return (
        <>
            <h1>Users page</h1>
            {usersList.length === 0 && <em>There are no users</em>}
            {usersList.length > 0 &&
                usersList.map((user) => {
                    return (
                        <li
                            key={user.id}
                            onClick={() => {
                                setselectedUser(user);
                            }}
                        >
                            {user.email}
                        </li>
                    );
                })}
            {selectedUser && (
                <form action="" className="form-signin" onSubmit={onFormSubmit}>
                    <label htmlFor="inputEmail" className="sr-only">
                        Email address
                    </label>
                    <input
                        type="email"
                        id="inputEmail"
                        className="form-control"
                        placeholder="Email address"
                        required
                        value={selectedUser.email}
                    />
                    <label htmlFor="inputPassword" className="sr-only">
                        Password
                    </label>
                    <input
                        type="password"
                        id="inputPassword"
                        className="form-control"
                        placeholder="Password"
                        required
                        value={selectedUser.password}
                        onChange={(e) => setselectedUser(e.target.value)}
                    />
                    <label htmlFor="confirmInputPassword" className="sr-only">
                        Password
                    </label>
                    <input
                        type="password"
                        id="confirmInputPassword"
                        className="form-control"
                        placeholder="Confirm password"
                        required
                        value={selectedUser.password}
                        onChange={(e) => setselectedUser(e.target.value)}
                    />

                    {/* <label htmlFor="inputRole" className="sr-only">
                        Role
                    </label>
                    {Role.keys.map((role) => {
                        return (
                            <>
                                <input
                                    type="radio"
                                    id={role}
                                    name="gender"
                                    value={role}
                                    checked={role === selectedUser.role}
                                />
                                <label for={role}>{role.toUpperCase()}</label>
                            </>
                        );
                    })} */}
                    <button className="btn btn-lg btn-primary btn-block" type="submit">
                        Save
                    </button>
                </form>
            )}
        </>
    );
};
