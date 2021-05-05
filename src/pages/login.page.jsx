import React from 'react';
import { useHistory } from 'react-router';
import { ApplicationContext } from '../contexts/application-context';
import { authenticationService } from '../services/user.service';

const LoginPage = (props) => {
    const history = useHistory();
    const { currentUser, setCurrentUser } = React.useContext(ApplicationContext);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState();

    React.useEffect(() => {
        if (currentUser) {
            alert('Already logged in');
            history.push('/');
        }
    }, []);

    const fillAdminInfo = () => {
        setEmail('admin@apartments.com');
        setPassword('hola1234');
    };

    const fillRealtorInfo = () => {
        setEmail('anna@realtor.com');
        setPassword('hola1234');
    };

    const onFormSubmit = async (e) => {
        setError(null);
        e.preventDefault();
        try {
            const user = await authenticationService.login(email, password);
            setCurrentUser(user);
            if (user.role === 'Admin') {
                history.push('/users');
            } else {
                history.push('/');
            }
        } catch (error) {
            setError(error);
            setPassword('');
        }
    };

    return (
        <div>
            <div className="alert alert-info">
                <strong>Administrator</strong> - 📧: admin@apartments.com P: hola1234
            </div>

            <button onClick={fillAdminInfo}>Fill Admin info</button>
            <button onClick={fillRealtorInfo}>Fill Realtor info</button>
            <form action="" className="form-signin" onSubmit={onFormSubmit}>
                <h2 className="form-signin-heading">Please login</h2>
                <label htmlFor="inputEmail" className="sr-only">
                    Email address
                </label>
                <input
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    placeholder="Email address"
                    required
                    value={email}
                    onFocus={() => setError(null)}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onFocus={() => setError(null)}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className="btn btn-lg btn-primary btn-block" type="submit">
                    Login
                </button>
            </form>
            {error && (
                <div class="alert alert-danger">
                    <strong>Ups! </strong> {error}
                </div>
            )}
        </div>
    );
};

export { LoginPage };
