
import { Link } from 'react-router-dom';
import './card.scss'

const Card = ({src, name, country, price, id}) => {
    return (
        <div className='card'>
            <Link to={`/our-coffee/${id}`}>
                <img src={src} alt="card" className="card_img" />
                <h3 className="card_name">{name}</h3>
                {
                    country ? <h3 className='card_country'>{country}</h3>  : null
                }
                <div className="card_price">{price}</div>
            </Link>

        </div>
    )
}

export default Card;