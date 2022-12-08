
import Card from "../card/Card";
import './cardLIst.scss'

const CardList = () => {

    const cards = []

    for(let i = 0; i < 6; i++) {
        cards.push(
            <li className="card_item"></li>
        )
    }

    return (
        <ul className="card_list">

        </ul>
    )
}

export default CardList;