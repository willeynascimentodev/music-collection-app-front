exports.paginate = (collection, page, perPage) => {
    const col = collection;
    let newCol = [];
    let end = (page * perPage);
    
    let start = end - perPage;
    
    for(let i = start; i<end; i++) {
        if (col[i]) {
            newCol.push(col[i]);
        }
    }
    
    return newCol;
}

