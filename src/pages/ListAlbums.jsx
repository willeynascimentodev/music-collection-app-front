import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAlbums, reset } from "../features/albums/albumsSlice";
import AlbumItem from '../components/AlbumItem';

function ListAlbums() {

    const { albums, isSuccess } = useSelector((state) => state.albums)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            if(isSuccess) {
                dispatch(reset())
            }
        }
    }, [dispatch, isSuccess])

    useEffect(() => {
        dispatch(getAlbums());
    }, [dispatch]);

    const newAlbum = () => {
        navigate('/edit-album');
    }

    return(
        <section className='pt-3 container'>

            <div className='d-flex justify-content-between'>
                <h2 className='d-inline'>Albums</h2>
                <button 
                    className='btn btn-success' 
                    onClick={ newAlbum }
                >New Album</button>
            </div>
            
            <div className="table-responsive">
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Artist</th>
                            <th>Album</th>
                            <th>Created</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        { albums.map((album) => (
                            <tr key={ album.id }>
                                <AlbumItem album={album} />
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
} 

export default ListAlbums;