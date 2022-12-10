
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './card.scss'

const Card = (props) => {

    const [card, setCard] = useState({});

    useEffect(() => {
        onCardLoaded()
    }, [])

    const onCardLoaded = () => {
        setCard(props)
    }

    const {src, name, country, price, id} = card
    
    return (
        <Link to={`/our-coffee/${id}`}>
            <img src={src} alt={name} className="card_img" />
            <h3 className="card_name">{name}</h3>
            {
                country ? <h3 className='card_country'>{country}</h3>  : null
            }
            <div className="card_price">{price}</div>
        </Link>
    )
}

export default Card;