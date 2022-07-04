import { Link } from 'react-router-dom';

function Header () {

    return (
        <header>
            <nav className="p-3 nav navbar-expand-lg navbar-light bg-light">
                <span className="navbar-brand">
                    Music Collection
                </span>
                <div className="collapse navbar-collapse text-right" id="navbarTogglerDemo01">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className='nav-link' to="/login">Sign In</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to="/registration">Create an account</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;