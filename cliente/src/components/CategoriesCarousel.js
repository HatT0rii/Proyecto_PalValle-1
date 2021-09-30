import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import foto1 from '../assets/foto01.jpg'
import foto2 from '../assets/foto02.jpg'
import foto3 from '../assets/foto03.jpg'
import foto4 from '../assets/foto04.jpg'

function CategoriesCarousel() {

    let configuracion ={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear"
    }

    return (
        <Slider {...configuracion}>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={foto1}  alt="..."/>
                    </div>
                    <ul className="social-icons">
                        <li><a href="/"><i className="fa"></i></a></li>
                    </ul>
                    <div className="details">
                        <a className="btn btn-success" href="/">Comprar</a>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={foto2} alt="..."/>
                    </div>
                    <ul className="social-icons">
                        <li><a href="/"><i className="fa"></i></a></li>
                    </ul>
                    <div className="details">
                        <a className="btn btn-success" href="/">Comprar</a>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={foto3} alt="..." />
                    </div>
                    <ul className="social-icons">
                        <li><a href="/"><i className="fa"></i></a></li>
                    </ul>
                    <div className="details">
                        <a className="btn btn-success" href="/">Comprar</a>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={foto4} alt="..."/>
                    </div>
                    <ul className="social-icons">
                        <li><a href="/"><i className="fa"></i></a></li>
                    </ul>
                    <div className="details">
                        <a className="btn btn-success" href="/">Comprar</a>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default CategoriesCarousel
