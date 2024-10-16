import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

function CardItem(props) {
    return (
        <li className="card-item">
            <Link to={props.path} className="cards-item-link">
                <figure className="card-item-pic-wrap" data-category={props.label}>
                    <img src={props.src} alt="Travel" className="card-item-img" />
                </figure>
                <div className="card-item-info">
                    <h5 className="card-item-text">{props.text}</h5>
                </div>
            </Link>
        </li>
    );
}

export default CardItem;