
import { useState } from 'react';
import './filterCard.scss'


const FilterCard = (props) => {

    const [term, setTerm] = useState('')

    const filterBtnsRefs = []
    
    const onUpdateSeacrh = (e) => {
        const term = e.target.value
        setTerm(term)
        props.onUpdateSeacrh(term)
    }

    const onCountryFilter = (e) => {
        const country = e.target.textContent
        props.onCountryFilter(country)

        filterBtnsRefs.forEach(btn => btn.classList.remove('active'))
        e.target.classList.add('active')
    }  

    const setFitlerBtnsRefs = (btnRef) => {
        filterBtnsRefs.push(btnRef)
    }

    return (
        <>
            <div className="filters_wrap">
                <div className="looking_for_filter_wrap">
                    <div className="looking_for_text">Looking for</div>
                    <input 
                        className="filter_input" 
                        type="text" 
                        placeholder='start typing here...'
                        value={term}
                        onChange={onUpdateSeacrh}
                        />
                </div>
                <div className="filter_btns_wrap">
                    <div className="or_filter">Or filter</div>
                    <ul className="filter_btns_list">
                        <li className="filter_item">
                            <button className="filter_btn" onClick={onCountryFilter} ref={setFitlerBtnsRefs}>Brazil</button>
                        </li>
                        <li className="filter_item">
                            <button className="filter_btn" onClick={onCountryFilter} ref={setFitlerBtnsRefs}>Kenya</button>
                        </li>
                        <li className="filter_item">
                            <button className="filter_btn" onClick={onCountryFilter} ref={setFitlerBtnsRefs}>Columbia</button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default FilterCard;