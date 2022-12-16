
import Card from "../card/Card";

import data from "../../server/db";
import './cardLIst.scss'

const CardList = ({term, countryFilter}) => {

    const onUpdateSeacrh = (data, term) => {

        return data.filter(item => {
            return item.name.indexOf(term) !== -1
        })
    }

    const onCountryFilter = (data, country) => {

        return data.filter(item => {
            if(country === '') return item

            return item.country === country;
        })
    }

    let dataCards = []
    
    if(term === undefined && countryFilter === undefined) {
        dataCards = data.coffeeList;
    } else {
        dataCards = onCountryFilter(onUpdateSeacrh(data.coffeeList, term), countryFilter)
    }
    
    const createCards = data => {
        return data.map(item => {
            const {id, ...itemProps} = item
            return (
                <li className='card_list_item' tabIndex={1} key={id}>
                    <Card
                        {...itemProps}
                        id={id}
                    /> 
                </li>
            )
        })
    }

    const cards = createCards(dataCards);

    let styleForUl;
    cards.length === 0 ? styleForUl = {display: 'block'} : styleForUl = null

    return (
        <ul className="card_list" style={styleForUl}>
            {cards.length === 0 ? <h2 className="has_no_cards">There is no cards with this filter</h2> : cards}
        </ul>
    )
}

export default CardList;