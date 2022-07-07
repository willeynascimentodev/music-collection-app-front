import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { insertAlbum, getAlbum, updateAlbum } from '../features/albums/albumsSlice';
import { getArtists, getArtist } from "../features/artists/artistsSlice";

function FormAlbum () {

    const { artists, artist, isSuccess } = useSelector((state) => state.artists);
    const { album } = useSelector((state) => state.albums);
    const { album_id } = useParams();
    
    const navigate = useNavigate();
    
    useEffect( () => {

        const fetch = async () => {
            await dispatch(getArtists());
            if (album_id) {
                await dispatch(getAlbum(album_id));
                await dispatch(getArtist(album.artist_id));
            }
        }

        fetch();
        
    }, []);

    const [formData, setFormData] = useState({
        artist_id_state: album.artist_id ? album.artist_id : 1,
        album_name_state: album.album_name ? album.album_name : null,
        year_state: album.year ? album.year : null,
    });

    const { album_name_state, artist_id_state, year_state } = formData

    const onChange = (e) => {
        setForm(e);
    }

    const setForm = (e) => {
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
            year: year_state ? year_state : album.year 
        };
    
        if(album_id) {
            albumData.id = album_id;
            dispatch(updateAlbum(albumData));
        } else {
            dispatch(insertAlbum(albumData));
        }
    };

    const dispatch = useDispatch();

    const back = () => {
        navigate('/albums');
    }

    return(
        <section className='pt-3 container card mt-5 p-5'>
            <h3> Album { album.id }</h3>
            <form onSubmit={ saveAlbum } >
                <div className="row">
                    <div className="form-group col-sm-12 col-md-4">
                        <label>Artista</label>
                        <select required onChange={ onChange } name="artist_id_state" id="artist_id_state" className="col-sm-12 form-control">
                                <option key={ album.artist_id } value={ album.artist_id }> </option>
                                {
                                    artists.map((artist) => (
                                        <option key={ artist.id } value={ artist.id }> { artist.name } </option>
                                    ))
                                } 
                        </select>
                    </div>
                    <div className="form-group col-sm-12 col-md-4">
                        <label>Year</label>
                        <input name="year_state" id="year_state" required onChange={ onChange } value={ year_state ? year_state : album.year } type="number" min="1500" max="2022" className="col-sm-12 form-control"/>
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

export default FormAlbum;