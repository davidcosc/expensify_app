import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = (props) => (
    <div>
        Sorry, the page you requested was not found.
        404
        <Link to="/">home</Link>
    </div>
);
export default NotFound;