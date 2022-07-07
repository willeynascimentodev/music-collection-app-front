import NavDesktop from '../components/NavDesktop';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

function Header () {

    const { user } = useSelector( 
        (state) => state.auth    
    );

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const logoutHeader = () => {
        dispatch(logout());
        if(!user) {
            navigate('/login')
        }
    }

    return (
        <header>
            <nav className="p-3 nav navbar-expand-lg navbar-light bg-light">
                <span className="navbar-brand">
                    Music Collection
                </span>
                <div className="collapse navbar-collapse text-right" id="navbarTogglerDemo01">

                    <NavDesktop user={ user } logout={ logoutHeader }/>
                </div>
            </nav>
        </header>
    );
}

export default Header;