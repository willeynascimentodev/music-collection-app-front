import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Paginator ({items, perPage, col, page}) {
    const totalPages = Math.ceil(items/perPage);
    const pages = [];
    
    if(page == undefined) {
        page = 1;
    }

    console.log(page);
    
    for(let i=0; i<totalPages; i++) {
        pages.push(i+1);
    }

    let newRoute = `/${col}`;

    

    const item = (p) => {
        
        return ({ 
            color: page == p ? 'white' : 'gray',
            padding: '10px',
            backgroundColor: page == p ? 'gray' : 'lightgray',
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



