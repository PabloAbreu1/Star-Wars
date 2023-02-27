import React, { useEffect, useContext} from 'react';
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import {Context} from "../store/appContext";
import Characters from "./resourses/personajes.json"

export const CharacterDescription = props => {
    const params = useParams();
    const {store, actions} = useContext(Context); 

    useEffect(() => {
        actions.functCharacter(params.id)
    }, [])
    
    let posicion = params.id -1;

    return (
        <div className='container d-flex'>
            <div className='d-flex'>
            <div className='col-6 col-md-6 col-sm-6 containMe m-2 text-center'>
                <img src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`} className="imagSize border border-dark" alt="" />
            </div>
            <div className='col-6 col-md-6 col-sm-6 containMe text-center m-2 border border-dark'>
                <h1 className='mt-3 text-decoration-underline'>{store.viewPersonajes.properties?.name}</h1>
                <h5 className='fontSizing'>
                    {Characters[posicion].description}
                </h5>
            </div>
            </div>
        </div>
    )
}

CharacterDescription.propTypes = {
    match: PropTypes.object
};