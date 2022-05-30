import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../AuthContext';

const Layout = (props) => {
    const { user } = useUser();
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark fixed-top bg-dark border-bottom box-shadow">
                <div className="container">
                    <Link className="navbar-brand" to="/">Most Loved Bookmarks</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                        <ul className="navbar-nav flex-grow-1">
                            {!user && <>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="/signup">Signup</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="/login">Login</Link>
                                </li>
                            </>
                            }
                            {user && <>
                                <li className="nav-item">
                                    <Link to='/mybookmarks' className='nav-link text-light'>
                                        My Bookmarks
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/addbookmark' className='nav-link text-light'>
                                        Add Bookmark
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/logout' className='nav-link text-light'>
                                        Logout
                                    </Link>
                                </li>
                            </>
                            }
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container" style={{ marginTop: 60 }}>
                {props.children}
            </div>

        </div >
    )
}

export default Layout;