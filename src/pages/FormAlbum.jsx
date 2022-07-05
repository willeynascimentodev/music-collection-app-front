function FormAlbum() {

    const saveAlbum = (e) => {
        e.preventDefault();
        console.log('oi');
    };

    return(
        <section className='pt-3 container'>
            <h3> Album </h3>
            <form onSubmit={ saveAlbum } >
                <div className="row">
                    <div className="form-group col-sm-12 col-md-4">
                        <label>Artista</label>
                        <select name="artist_id" id="artist_id" className="col-sm-12 form-control">
                            <option value="teste">teste</option>
                        </select>
                    </div>
                    <div className="form-group col-sm-12 col-md-4">
                        <label>Artista</label>
                        <input type="number" min="1500" max="2022" className="col-sm-12 form-control"/>
                    </div>
                    <div className="form-group col-sm-12 col-md-4">
                        <label>Nome</label>
                        <input type="text" minLength="3" maxLength="100" className="col-sm-12 form-control"/>
                    </div>
                </div>
                <div className="mt-2 row">
                    <div className="form-group col-sm-12 col-md-4">
                        <input type="submit" className="btn btn-success" value="Salvar"/>
                    </div>
                </div>
            </form>
        </section>
    )
} 

export default FormAlbum;