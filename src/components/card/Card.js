
import './card.scss'
import cardImage from '../../resources/card/card_1.png'

const Card = () => {
    return (
        <div className='card'>
            <img src={cardImage} alt="card" className="card_img" />
            <h3 className="card_name">Solimo Coffee Beans 2 kg</h3>
            <div className="card_price">10.73$</div>
        </div>
    )
}

export default Card;