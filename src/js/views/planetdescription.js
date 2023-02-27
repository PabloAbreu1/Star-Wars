import React, { useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import PlanetInfo from "./resourses/planetas.json";

export const PlanetDescription = props => {
    const params = useParams();
    const {store, actions} = useContext(Context);

    useEffect(() => {
        actions.functPlanetas(params.id)
    }, [])

    let posicion = params.id -1;

    return (
        <div className='container d-flex'>
            <div className='d-flex'>
            <div className='col-6 col-md-6 col-sm-6 containMe m-2 text-center'>
                <img src={posicion=== 0 ? "https://static.wikia.nocookie.net/theclonewiki/images/b/b4/Tatooine-TCW.png" : `https://starwars-visualguide.com/assets/img/planets/${params.id}.jpg`} className="imagSize3 border border-dark" alt="" />
            </div>
            <div className='col-6 col-md-6 col-sm-6 containMe text-center m-2 border border-dark'>
                <h1 className='mt-3 text-decoration-underline'>{store.viewPlanets.properties?.name}</h1>
                <p className='fontSizing'>{PlanetInfo[posicion].description}</p>
            </div>
            </div>
        </div>
    )
}
PlanetDescription.propTypes = {
    match: PropTypes.object
};