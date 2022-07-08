import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getArtists } from "../features/artists/artistsSlice";
import { paginate } from '../Helpers/Paginator'
import Paginator from '../components/Paginator'

function ListArtists() {

    const { artists } = useSelector((state) => state.artists)
    const dispatch = useDispatch();

    const { page } = useParams();

    useEffect(() => { 
        dispatch(getArtists());
       
    }, [getArtists]);

    let artistsP = null;

    const perPage = 5;

    if (artists) {
        artistsP = paginate(artists, page ? page : 1, perPage);
        
    }


    return(
        <section className='pt-3 container card mt-5 p-5'>
            <div className='d-flex justify-content-between'>
                <h2 className='d-inline'>Artists</h2>
            </div>
            
            <div className="table-responsive">
                    { 
                        !artists ? 
                            ''
                        :
                        <Paginator items={ artists.length } perPage={ perPage } col={'artists'} page={ page }/>             
                    }
                
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Artist Name</th>
                            <th>Twiter</th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            !artistsP ? 
                                <span className='pt-5'>Artists not found</span>
                            :
                            artistsP.map((artist) => (
                                    <tr key={ artist.id }>
                                        <td>{ artist.id }</td>
                                        <td>{ artist.name }</td>
                                        <td>{ artist.twitter }</td>
                                    </tr>
                            ))                        
                        }

                    </tbody>
                </table>
            </div>
        </section>
    )
} 

export default ListArtists;