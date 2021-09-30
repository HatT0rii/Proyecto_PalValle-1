import React from 'react'
import { Link } from 'react-router-dom'
import foto01 from '../assets/foto01.jpg'


function Card({title, imageSource}) {
    return (
        <div className="card text-center">
            <div className="card-body">
            <img src={imageSource} alt="" className="card-img-top"/>
            </div>
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <Link className="btn btn-outline-success">
                    Ver productos
                </Link>
            </div>
        </div>
    )
}

export default Card
