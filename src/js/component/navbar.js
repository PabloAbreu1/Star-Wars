import React, {useState, useEffect, useContext} from "react";
import {Link} from "react-router-dom";
import Icon from "../img/icon.png"
import {Context} from "../store/appContext";
import {BsFillTrashFill} from "react-icons/bs";


export const Navbar = () => {
    const {store, actions} = useContext(Context);

    const [contadorLikes, setContadorLikes] = useState("")

    function contarLikes() {
        setContadorLikes(store.likesGuardados.length)
    }

    useEffect(() => {
        contarLikes()
    }, [store.likesGuardados])


    return (
        <nav className="navbar navbar-light bg-dark container sticky-top">
			<h4></h4>
			<h1 className="text-light justify-content-center">Star Wars</h1>
            <div className="bg-dark">
                <div className="dropdown">
                    <button className="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Favourites
                        <span className="text-white">
                            {
                            " " + contadorLikes
                        }</span>
                    </button>
                    <ul className="dropdown-menu">
                        {
                        store.likesGuardados.map((like, i) => (
                            <li key={i} 
                                className="d-flex">
                                <a class="dropdown-item" href="#">
                                    {
                                    like
                                } </a>
                                <button className="btn"
                                    onClick={
                                        () => actions.dotLikeItAnymore(like)
                                }>
                                    <i className="fas fa-trash-alt"/>
                                </button>
                            </li>

                        ))
                    } </ul>
                </div>
            </div>
        </nav>
    );
};
