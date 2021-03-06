import './main.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListArtists from './pages/ListArtists';
import ListAlbums from './pages/ListAlbums';
import EditAlbum from './pages/EditAlbum';
import CreateAlbum from './pages/CreateAlbum';
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
          <Route path="/artists/:page" element={ <PrivateRoute /> }>
            <Route path="/artists/:page" element={ <ListArtists /> } />
          </Route>
          <Route path="/create-album" element={ <PrivateRoute /> }>
            <Route path="/create-album" element={ <CreateAlbum /> } />
          </Route>
          <Route path="/edit-album/:album_id" element={ <PrivateRoute /> }>
            <Route path="/edit-album/:album_id" element={ <EditAlbum /> } />
          </Route>
          <Route path="/albums/:page" element={ <PrivateRoute /> }>
            <Route path="/albums/:page" element={ <ListAlbums /> } />
          </Route>          
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
