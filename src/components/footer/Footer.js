
import Nav from '../nav/Nav';
import Separator from '../separator/Separator';
import './footer.scss'

const Footer = () => {
    return (
        <footer>
            <div className="nav_wrapper">
                <Nav type='black'/>
            </div>
            <Separator type='black'/>
        </footer>
    )
}

export default Footer;