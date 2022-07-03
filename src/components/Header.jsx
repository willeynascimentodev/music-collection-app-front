import { Link } from 'react-router-dom';

function Header () {

    return (
        <header>
            <nav className="p-3 nav navbar-expand-lg navbar-light bg-light">
                <a href="#" className="navbar-brand">
                    Music Collection
                </a>
                <div class="collapse navbar-collapse text-right" id="navbarTogglerDemo01">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                            <Link class='nav-link' to="/login">Sign In</Link>
                        </li>
                        <li class="nav-item">
                            <Link class='nav-link' to="/registration">Create an account</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;