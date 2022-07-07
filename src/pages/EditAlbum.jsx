import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { insertAlbum, getAlbum, updateAlbum } from '../features/albums/albumsSlice';
import { getArtists, getArtist } from "../features/artists/artistsSlice";

function EditAlbum () {

    const { artists } = useSelector((state) => state.artists);
    const { album } = useSelector((state) => state.albums);
    const { album_id } = useParams();

    const dispatch = useDispatch();
    
    const navigate = useNavigate();

    let artist = null;
    let artistsUnselected = null;

    const [formData, setFormData] = useState({
        artist_id_state:  null,
        album_name_state: '',
        year_state: null,
    });
    
    useEffect( () => {

        const fetch = async () => {
            dispatch(getArtists());
            if (album_id) {
                dispatch(getAlbum(album_id));
            }
            
        }

        fetch();
        
    }, []);

    if(!album) {
        return <div class='p-5'>Loading...</div>
    }

    const { album_name_state, artist_id_state, year_state } = formData

    if(artists && album) {
        artistsUnselected = artists.filter( (artist) => { return artist.id != album.artist_id});
        artist = artists.filter( (artist) => { return artist.id == album.artist_id})[0];
    }
    

    const onChange = (e) => {
        setFormData( (prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    const saveAlbum = (e) => {
        e.preventDefault();
        
        let albumData = {
            artist_id: artist_id_state ? artist_id_state : album.artist_id,
            album_name: album_name_state ? album_name_state : album.album_name,
            year: year_state ? year_state : album.year,
        };
    
        if(album_id) {
            albumData.id = album_id;
            console.log(albumData);
            dispatch(updateAlbum(albumData));
        } 
    };

    const back = () => {
        navigate('/albums/1');
    }

    return(
        <section className='pt-3 container card mt-5 p-5'>
            <h3> Album { album ? album.id : '' }</h3>
            <form onSubmit={ saveAlbum } >
                <div className="row">
                    <div className="form-group col-sm-12 col-md-4">
                        <label>Artista</label>
                        <select required onChange={ onChange } name="artist_id_state" id="artist_id_state" className="col-sm-12 form-control">
                                
                                {
                                    album && artist ?
                                            <option key={ album.artist_id } value={ album.artist_id }> { artist.name } </option> : ''

                                } 
                                {
                                    artistsUnselected ?        
                                    artistsUnselected.map((artist) => (
                                        <option key={ artist.id } value={ artist.id }> { artist.name } </option>
                                    )) : ''
                                }
                        </select>
                    </div>
                    <div className="form-group col-sm-12 col-md-4">
                        <label>Year</label>
                        <input name="year_state" id="year_state" required onChange={ onChange } value={ year_state ? year_state : album.year } type="number" min="1500" max="2023" className="col-sm-12 form-control"/>
                    </div>
                    <div className="form-group col-sm-12 col-md-4">
                        <label>Nome</label>
                        <input name="album_name_state" id="album_name_state" required onChange={ onChange } value={ album_name_state ? album_name_state : album.album_name } type="text" minLength="3" maxLength="100" className="col-sm-12 form-control"/>
                    </div>
                </div>
                <div className="mt-2 d-flex justify-content-between">
                    <div className="d-inline">
                        <button onClick={ back }className="btn-secondary form-control">Voltar</button>
                    </div>

                    <div className="d-inline">
                        <input type="submit" className="btn btn-success" value="Salvar"/>
                    </div>
                </div>
            </form>
        </section>
    )
} 

export default EditAlbum;