import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import { LoginPage } from './pages/login.page';
import { PrivateRoute } from './components/private-route.component';
import { Role } from './utlils/role';
import { ApplicationContext } from './contexts/application-context';
import { HomePage } from './pages/home.page';
import { UsersPage } from './pages/users.page';

function App() {
    const [currentUser, setCurrentUser] = React.useState();
    const [isAdmin, setIsAdmin] = React.useState(false);

    const logout = (e) => {
        localStorage.removeItem('currentUser');
        setCurrentUser(null);
        setIsAdmin(false);
    };

    const updateState = (user) => {
        setCurrentUser(user);
        setIsAdmin(user.role === Role.Admin);
    };
    return (
        <ApplicationContext.Provider value={{ currentUser, setCurrentUser: updateState }}>
            <Router>
                <div style={{ height: '100%' }}>
                    {currentUser && (
                        <nav className="navbar navbar-expand navbar-dark bg-dark">
                            <div className="navbar-nav">
                                <Link to="/" className="nav-item nav-link">
                                    Home
                                </Link>
                                {isAdmin && (
                                    <Link to="/admin" className="nav-item nav-link">
                                        Admin
                                    </Link>
                                )}
                                <a onClick={logout} className="nav-item nav-link">
                                    Logout
                                </a>
                            </div>
                        </nav>
                    )}
                    <div className="jumbotron" style={{ height: '100%' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 offset-md-3">
                                    <PrivateRoute exact path="/" component={HomePage} />
                                    <PrivateRoute
                                        path="/users"
                                        roles={[Role.Admin]}
                                        component={UsersPage}
                                    />
                                    <Route path="/login" component={LoginPage} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        </ApplicationContext.Provider>
    );
}

export default App;
