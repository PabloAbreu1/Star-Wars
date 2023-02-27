import React, { useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import {Context} from "../store/appContext";
import VehicleInfo from "./resourses/vehicles.json";

export const VehicleDescription = props => {
    const params = useParams();
    const {store, actions} = useContext(Context);
         
    function cambiadorIndex(){
        let numberLoko = 0;
        if (params.id==4) {
            numberLoko = "0";
        }else if (params.id==7) {
            numberLoko = "1";
        }else if (params.id==6) {
            numberLoko = "2";
        }else if (params.id==8) {
            numberLoko = "3";
        }else if (params.id==14) {
            numberLoko = "4";
        }else if (params.id==18) {
            numberLoko = "5";
        }else if (params.id==16) {
            numberLoko = "6";
        }else if (params.id==19) {
            numberLoko = "7";
        }else if (params.id==20) {
            numberLoko = "8";
        }else {
            numberLoko = "9";
            
        }
        return numberLoko;
        }

        let indexJason = cambiadorIndex();

        useEffect(() => {
            actions.functVehicle(params.id)      
        }, [])

    return (
        <div className='container d-fñex'>
            <div className='d-flex'>
            <div className='col-6 col-md-6 col-sm-6 containMe me-2 text-center'>
                <img src={`https://starwars-visualguide.com/assets/img/vehicles/${params.id}.jpg`} className="imagSize2 border border-dark" alt="" />
            </div>
            <div className='col-6 col-md-6 col-sm-6 containMe text-center ms-2 border border-dark'>
                <h1 className='mt-3 text-decoration-underline'>{store.viewVehicles.properties?.name}</h1>
                <p className='fontSizing'>{VehicleInfo[indexJason].description}</p>
            </div>
            </div>
        </div>
    )
}
VehicleDescription.propTypes = {
    match: PropTypes.object
};