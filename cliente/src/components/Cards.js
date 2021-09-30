import React from 'react'
import Card from './Card'
import foto01 from '../assets/foto01.jpg'
import foto02 from '../assets/foto02.jpg'
import foto03 from '../assets/foto03.jpg'

function Cards() {

    const cards = [
        {
            id:1,
            title:'Sistema Digestivo',
            image: foto01
        },
        {
            id:2,
            title:'Sistema Nervioso',
            image: foto02
        },
        {
            id:3,
            title:'Controla tu peso',
            image: foto03
        },
        {
            id:4,
            title:'Controla tu peso',
            image: foto01
        },
    ]

    return (
        <div className="container d-flex space-between-center">
            <div className="row">
                {
                    cards.map((card) => (
                        <div className="col-md-3 mb-3" key={card.id}>
                            <Card title={card.title} imageSource={card.image}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cards
