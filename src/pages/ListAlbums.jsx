import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAlbums, reset } from "../features/albums/albumsSlice";
import AlbumItem from '../components/AlbumItem';
import { paginate } from '../Helpers/Paginator';
import Paginator from '../components/Paginator'

function ListAlbums() {

    const { albums, isSuccess, isLoading } = useSelector((state) => state.albums)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { page } = useParams();

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

    let albumsP = null;

    const perPage = 2;

    if (albums) {
        albumsP = paginate(albums, page ? page : 1, perPage);
    }


    const newAlbum = () => {
        navigate('/create-album');
    }

    return(
        <section className='pt-3 container card mt-5 p-5'>

            <div className='d-flex justify-content-between'>
                <h2 className='d-inline'>Albums</h2>
                <button 
                    className='btn btn-success' 
                    onClick={ newAlbum }
                >New Album</button>
            </div>
            
            <div className="table-responsive">
                    { 
                        !albums ? 
                            ''
                        :
                        <Paginator items={ albums.length } perPage= { perPage }/>             
                    }
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

                        { 
                            !albumsP ? 
                                <span className='pt-5'>Artists not found</span>
                            :
                            albumsP.map((album) => (
                                <tr key={ album.id }>
                                    <AlbumItem album={album} />
                                </tr>
                            ))                       
                        } 
                       
                    </tbody>
                </table>
            </div>
        </section>
    )
  

  
} 

export default ListAlbums;