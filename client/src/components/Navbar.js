import React, { useContext } from 'react'; 
import {NavLink, useHistory} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const Navbar = () => {

    const auth = useContext(AuthContext);
    const history = useHistory();

    const logoutHandler = event => {
        event.preventDefault();
        auth.logout();
        history.push('/');
    }

    return(
        <nav>
        {/*Add styles and screen res resize*/}
        <div className="nav-wrapper teal " style = {{ padding: '0.2rem' }}>
          <a href="/" className="brand-logo">Alaska</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to="/create">Create</NavLink></li>
            <li><NavLink to="/links">Links</NavLink></li>
            <li><a href = "/" onClick = {logoutHandler}>Log Out</a></li>
          </ul>
        </div>
      </nav>
    );

}