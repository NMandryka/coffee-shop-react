
import {Nav, Separator, Card, Footer, TagH1} from '../index'
import data from "../../server/db";
import './styles/mainPage.scss'

const MainPage = () => {

    const cards = data.coffeeList.map((item, i) => {
        if(i < 3) {
            return (
                <li className='card_list_item' tabIndex={1} key={item.id}>
                    <Card 
                        src={item.src} 
                        name={item.name}
                        price={item.price}
                        id={item.id}
                    />
                </li>
               
            )
        }
        return null
    })

    return (
        <>
            <header>
                <div className="container">
                    <Nav/>
                    <TagH1 text="Everything You Love About Coffee" marginTop={111}/>
                    <Separator />
                    <h2 className="header_h2 first">We makes every day full of energy and taste</h2>
                    <h2 className="header_h2">Want to try our beans?</h2>
                    <button className="header_btn">More</button>
                </div>
            </header>
            <section className="about_us">
                <h2 className="about_us_h2">About us</h2>
                <Separator type="black"/>
                {data.aboutUs}
            </section>
            <section className="our_best">
                <h2 className="our_best_h2">Our best</h2>
                <ul className="card_list">
                    {cards}
                </ul>
            </section>
            <Footer/>
        </>
    )
    
}

export default MainPage;