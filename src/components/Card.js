import React from "react";
import '../css/style.css';
function Card(props) {
    return (
        <>
            <div className="card card cardd"  >
                <img src={props.image} className="card-img-top img-fluid" alt="..." />
                <div className="card-body" >
                    <p className="card-text ">Some quick example text to build on the card title and make up the bulk of the card's content.
                        Some quick example text to build on the card title and make up the bulk of the card's content</p>
                </div>
            </div>
        </>
    );
}
export default Card;