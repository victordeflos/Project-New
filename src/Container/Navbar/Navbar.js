import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-info'>
            <div className='container'>
                <Link className='navbar-brand' to='/'>
                    Movie Posts
                </Link>

                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item active'>
                            <Link className='nav-link' to='/movies'>
                                Movies
                            </Link>
                        </li>
                        <li className='nav-item active'>
                            <Link className='nav-link' to='/posts'>
                                Posts
                            </Link>
                        </li>
                    </ul>
                    <Link to='/addPost' className='btn btn-secondary'>
                      Add Posts
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
