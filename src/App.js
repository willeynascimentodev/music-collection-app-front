
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListArtists from './pages/ListArtists'
import ListAlbums from './pages/ListAlbums'
import CreateAlbum from './pages/CreateAlbum'
import EditAlbum from './pages/EditAlbum'
import Login from './pages/Login'
import Registration from './pages/Registration'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={ <Login /> } />
          <Route path="/registration" element={ <Registration /> } />
          <Route path="/artists" element={ <ListArtists /> } />
          <Route path="/create-album" element={ <CreateAlbum /> } />
          <Route path="/edit-album" element={ <EditAlbum /> } />
          <Route path="/albums" element={ <ListAlbums /> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
