import './main.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListArtists from './pages/ListArtists'
import ListAlbums from './pages/ListAlbums'
import CreateAlbum from './pages/CreateAlbum'
import EditAlbum from './pages/EditAlbum'
import Login from './pages/Login'
import Registration from './pages/Registration'
import Header from './components/Header'
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
          <Route path="/artists" element={ <ListArtists /> } />
          <Route path="/create-album" element={ <CreateAlbum /> } />
          <Route path="/edit-album" element={ <EditAlbum /> } />
          <Route path="/albums" element={ <ListAlbums /> } />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
