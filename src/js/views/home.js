import React from "react";
import Characters from '../component/personajes'
import Planetas from '../component/planetas'
import Vehiculos from '../component/vehiculos'


export const Home = () => (
	<div className="">
            <Characters />
			<Vehiculos />
            <Planetas />
        </div>
);
