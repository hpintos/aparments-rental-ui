export const HomePage = ({ logout }) => {
    return (
        <>
            <h1>This is a private route</h1>
            <p>If you are here, thats becaouse you are logged in </p>
            <a onClick={logout} className="nav-item nav-link">
                Logout
            </a>
        </>
    );
};
