
import './card.scss'


const Card = ({src, name, country, price}) => {
    return (
        <div className='card'>
            <img src={src} alt="card" className="card_img" />
            <h3 className="card_name">{name}</h3>
            {
                country ? <h3 className='card_country'>{country}</h3>  : null
            }
            <div className="card_price">{price}</div>
        </div>
    )
}

export default Card;