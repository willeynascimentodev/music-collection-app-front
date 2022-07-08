import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header () {

    const { user } = useSelector( 
        (state) => state.auth    
    );

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const logoutSystem = () => {
        dispatch(logout());
        if(!user) {
            navigate('/login')
        }
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Music App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    { !user ?
                        <>
                            <li className="nav-item">
                                <Nav.Link href="/login">Sign In</Nav.Link>
                            </li>
                            <li className="nav-item">
                                <Nav.Link href="/registration">Create an account</Nav.Link>
                            </li>
                        </>
                    :
                        <>
                            <li className="nav-item">
                                <Nav.Link href="/artists/1">Artists</Nav.Link>
                                
                            </li>
                            <li className="nav-item">
                            <Nav.Link href="/albums/1">Albums</Nav.Link>
                            </li>
                            <li className="nav-item">
                                <span onClick={ logoutSystem } className='btn nav-link' to="/albums/1">Logout</span>
                            </li>
                        </>
                    
                    }
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;