import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArtists } from "../features/artists/artistsSlice";

function ListArtists() {

    const { artists } = useSelector((state) => state.artists)
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getArtists());

    }, []);


    return(
        <section className='pt-3 container'>
            <div className='d-flex justify-content-between'>
                <h2 className='d-inline'>Artists</h2>
            </div>
            
            <div className="table-responsive">
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Artist Name</th>
                            <th>Twiter</th>
                        </tr>
                    </thead>
                    <tbody>
                        { artists.map((artist) => (
                            <tr key={ artist[0].id }>
                                <td>{ artist[0].id }</td>
                                <td>{ artist[0].name }</td>
                                <td>{ artist[0].twitter }</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
} 

export default ListArtists;