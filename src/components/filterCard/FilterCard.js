
import './filterCard.scss'

const FilterCard = () => {
    return (
        <>
            <div className="filters_wrap">
                <div className="looking_for_filter_wrap">
                    <div className="looking_for_text">Looking for</div>
                    <input className="filter_input" type="text" placeholder='start typing here...'/>
                </div>
                <div className="filter_btns_wrap">
                    <div className="or_filter">Or filter</div>
                    <ul className="filter_btns_list">
                        <li className="filter_item">
                            <button className="filter_btn">Brazil</button>
                        </li>
                        <li className="filter_item">
                            <button className="filter_btn">Kenya</button>
                        </li>
                        <li className="filter_item">
                            <button className="filter_btn">Columbia</button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default FilterCard;