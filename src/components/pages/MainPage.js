
import Nav from "../Nav/Nav";
import Separator from "../separator/Separator";
import Card from "../card/Card";
import Footer from "../footer/Footer";
import './mainPage.scss'


const MainPage = () => {
    return (
        <>
            <header>
                <Nav/>
                <h1 className="header_h1">Everything You Love About Coffee</h1>
                <Separator />
                <h2 className="header_h2 first">We makes every day full of energy and taste</h2>
                <h2 className="header_h2">Want to try our beans?</h2>
                <button className="header_btn">More</button>
            </header>
            <section className="about_us">
                <h2 className="about_us_h2">About us</h2>
                <Separator type="black"/>
                <p className="about_us_p">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face. <br /> <br />
                    Now residence dashwoods she excellent you. Shade being under his bed her, Much
                    read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                    horrible but confined day end marriage. Eagerness furniture set preserved far
                    recommend. Did even but nor are most gave hope. Secure active living depend son
                    repair day ladies now.</p>
            </section>
            <section className="our_best">
                <h2 className="our_best_h2">Our best</h2>
                <ul className="card_list">
                    <li className="card_item"><Card/></li>
                    <li className="card_item"><Card/></li>
                    <li className="card_item"><Card/></li>
                </ul>
            </section>
            <Footer/>
        </>
    )
    
}

export default MainPage;