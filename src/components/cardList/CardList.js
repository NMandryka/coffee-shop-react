
import Card from "../card/Card";

import data from "../../server/db";
import './cardLIst.scss'

const CardList = ({term, countryFilter}) => {

    const onUpdateSeacrh = (data, term) => {

        const res = data.filter(item => {
            return item.name.indexOf(term) !== -1
        })

        return res
    }

    const onCountryFilter = (data, country) => {

        const res = data.filter(item => {
            if(country === '') return item

            return item.country === country;
        })

        return res
    }

    const dataCards = onCountryFilter(onUpdateSeacrh(data.coffeeList, term), countryFilter)
    
    const cards = dataCards.map(item => {
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

    return (
        <ul className="card_list">
            {cards}
        </ul>
    )
}

export default CardList;