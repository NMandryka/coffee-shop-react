
import { Link } from 'react-router-dom';
import './nav.scss'
import coffeeBeens from '../../resources/icon/nav_coffee-beans.svg'
import coffeeBeensBlack from '../../resources/icon/nav_coffee_beens_black.svg'

const Nav = ({type}) => {
    let clazz = ''
    if(type === 'black') {
        clazz = 'black'
    }

    return (
        <nav>
            <ul className="nav_ul">
                <img src={clazz === 'black' ? coffeeBeensBlack : coffeeBeens} alt="coffee beens" className="nav_img" />
                <li className="nav_li">
                    <Link to='/' className={`nav_a ${clazz}`} >Coffee home</Link>
                </li>
                <li className="nav_li">
                    <Link to='our-coffee' className={`nav_a ${clazz}`}>Our coffee</Link>
                </li>
                <li className="nav_li">
                    <Link to='for-your-pleasure' className={`nav_a ${clazz}`} >For your pleasure</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;