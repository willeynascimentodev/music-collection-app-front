import PropTypes from 'prop-types';
import { useLocation, Link } from 'react-router-dom';

function Paginator ({items, perPage}) {
    const totalPages = Math.ceil(items/perPage);
    const pages = [];
    const location = useLocation();

    for(let i=0; i<totalPages; i++) {
        pages.push(i+1);
    }

    const oldRoute = location.pathname.split('/');
    let newRoute = '';

    for(let i=0; i<oldRoute.length-1; i++) {
        if ( oldRoute[i] != '' ) {
            newRoute += "/"+oldRoute[i];
        }
    }

    
    const item = (p) => {
        
        return ({ 
            color: oldRoute.at(-1) == p? 'white' : 'gray',
            padding: '10px',
            backgroundColor: oldRoute.at(-1) == p? 'gray' : 'lightgray',
            borderRadius: '10px',
            fontSize: '13px',
            textDecoration: 'none'
        })
    }    

    return (
        <>
            <div className="p-3 text-center">
                { 
                    pages.map((p)=> (
                        <Link to={`${newRoute}/${p}`} key={p} style={ item(p) } className="d-inline m-1">{p}</Link>
                    ))
                }
            </div>
        </>
    );
}

Paginator.propTypes = {
    items: PropTypes.number,
    perPage: PropTypes.number,
}


export default Paginator;



