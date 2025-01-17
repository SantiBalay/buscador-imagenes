import React from 'react';

const Imagen = (props) => {

    if(!props.data) {
        return null
    }

    const{largeImageURL, likes, previewURL, tags, views} = props.data

    return (
        <div className="col-12 col-sm-6 col-md-4 mb-4 col-xl-3 col-lg-3">
            <div className="card">
                <img className="card-img-top" src={previewURL} alt={tags}/>

                <div className="card-body">
                    <p className="card-text"> {likes} Likes </p>
                    <p className="card-text"> {views} Views </p>

                    <a href={largeImageURL} target="_blank" className="btn btn-primary btn-block"> Ver Imagen</a>
                </div>

                
            </div>
        </div>
    );
};

export default Imagen;