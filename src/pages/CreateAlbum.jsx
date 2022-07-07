import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { insertAlbum, getAlbum } from '../features/albums/albumsSlice';
import { getArtists } from "../features/artists/artistsSlice";

function CreateAlbum () {

    const { artists } = useSelector((state) => state.artists);

    const { album_id } = useParams();

    const dispatch = useDispatch();
    
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        artist_id_state:  1,
        album_name_state: null,
        year_state: 2020,
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


    const { album_name_state, artist_id_state, year_state } = formData

    const onChange = (e) => {
        setFormData( (prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    const saveAlbum = (e) => {
        e.preventDefault();
        let data = {
            album_name: album_name_state,
            year: year_state,
            artist_id: artist_id_state
        }
        dispatch(insertAlbum(data));
    };

    const back = () => {
        navigate('/albums/1');
    }

    return(
        <section className='pt-3 container card mt-5 p-5'>
            <h3> New Album</h3>
            <form onSubmit={ saveAlbum } >
                <div className="row">
                    <div className="form-group col-sm-12 col-md-4">
                        <label>Artista</label>
                        <select required onChange={ onChange } name="artist_id_state" id="artist_id_state" className="col-sm-12 form-control">
                                {
                                    artists ?        
                                    artists.map((artist) => (
                                        <option key={ artist.id } value={ artist.id }> { artist.name } </option>
                                    )) : ''
                                }
                        </select>
                    </div>
                    <div className="form-group col-sm-12 col-md-4">
                        <label>Year</label>
                        <input name="year_state" id="year_state" required onChange={ onChange } value={ year_state } type="number" min="1500" max="2023" className="col-sm-12 form-control"/>
                    </div>
                    <div className="form-group col-sm-12 col-md-4">
                        <label>Nome</label>
                        <input name="album_name_state" id="album_name_state" required onChange={ onChange } value={ album_name_state } type="text" minLength="3" maxLength="100" className="col-sm-12 form-control"/>
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

export default CreateAlbum;