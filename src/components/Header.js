import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = (props) => (
    <div>
        <h1>expensify</h1>
        <NavLink to="/" exact={true} activeClassName="is-active">home</NavLink>
        <NavLink to="/create" activeClassName="is-active">create</NavLink>
        <NavLink to="/help" activeClassName="is-active">help</NavLink>
    </div>
);
export default Header;