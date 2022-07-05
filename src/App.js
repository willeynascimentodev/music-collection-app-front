import './main.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListArtists from './pages/ListArtists';
import ListAlbums from './pages/ListAlbums';
import FormAlbum from './pages/FormAlbum';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={ <Login /> } />
          <Route path="/registration" element={ <Registration /> } />

          <Route path="/" element={ <PrivateRoute /> }>
            <Route path="/artists" element={ <ListArtists /> } />
          </Route>
          <Route path="/artists" element={ <PrivateRoute /> }>
            <Route path="/artists" element={ <ListArtists /> } />
          </Route>
          <Route path="/create-album" element={ <PrivateRoute /> }>
            <Route path="/create-album" element={ <FormAlbum /> } />
          </Route>
          <Route path="/edit-album" element={ <PrivateRoute /> }>
            <Route path="/edit-album" element={ <FormAlbum /> } />
          </Route>
          <Route path="/albums" element={ <PrivateRoute /> }>
            <Route path="/albums" element={ <ListAlbums /> } />
          </Route>          
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
