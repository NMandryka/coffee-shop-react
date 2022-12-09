
import { Link } from "react-router-dom";
import Card from "../card/Card";

import data from "../../server/db";
import './cardLIst.scss'

const CardList = () => {

    const cards = data.coffeeList.map(item => {
        return (
            <li className="card_item" tabIndex={1}>
                <Link to={`/our-coffee/${item.id}`}>
                    <Card
                        src={item.src} 
                        name={item.name}
                        price={item.price}
                        country={item.country}
                        key={item.id}
                    />
                </Link>
                
            </li>
        )
    })

    return (
        <ul className="card_list">
            {cards}
        </ul>
    )
}

export default CardList;