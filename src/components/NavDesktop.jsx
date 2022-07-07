import { Link } from 'react-router-dom';


function NavDesktop ({user, logout}) {

    return (
        <>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

                { !user ?
                    <>
                        <li className="nav-item">
                            <Link className='nav-link' to="/login">Sign In</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to="/registration">Create an account</Link>
                        </li>
                    </>
                  :
                    <>
                        <li className="nav-item">
                            <Link className='nav-link' to="/artists/1">Artists</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to="/albums/1">Albums</Link>
                        </li>
                        <li className="nav-item">
                            <span onClick={ logout } className='btn nav-link' to="/albums/1">Logout</span>
                        </li>
                    </>
                
                }
            </ul>
        </>
    );
}

export default NavDesktop;