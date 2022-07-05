import PropTypes from 'prop-types'
import Swal from 'sweetalert2';
import { deleteAlbum, getAlbums } from '../features/albums/albumsSlice';
import { useDispatch, useSelector } from 'react-redux';


function AlbumItem ({album}) {

    const { isSuccess } = useSelector((state) => state.albums)
    const dispatch = useDispatch();

    const deleteItem = () => {
        
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteAlbum(album.id));
                if (isSuccess) {
                    Swal.fire(
                        'Deleted!',
                        'Your item has been deleted.',
                        'success'
                    )
                    dispatch(getAlbums());
                }
            }
        });
    }

    return (
        <>
            <td>{ album.id }</td>
            <td>{ album.artist_id }</td>
            <td>{ album.album_name }</td>
            <td>{ album.created_at }</td>
            <td>
                <button className="btn btn-secondary">Edit</button>
            </td>
            <td>
                <button 
                    className="btn btn-danger"
                    onClick = { deleteItem }
                >
                    Delete
                </button>
            </td>
        </>
    )
}

AlbumItem.propTypes = {
    album: PropTypes.object,
}

export default AlbumItem;