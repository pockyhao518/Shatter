import React from 'react';

const LoginError = ({ errors }) => {
    if (errors.session.length === 0) { return null; }
    const errorItems = errors.session.map(error => {
        return <li key={error}>{error}</li>
    });
    return (
        <div className={errors.session.length === 0 ? "hidden" : "login-error-list"}>
            <ul>{errorItems}</ul>
        </div>
    )
}

export default LoginError;