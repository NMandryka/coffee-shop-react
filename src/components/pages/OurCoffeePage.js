
import { useState, useEffect } from 'react';
import Nav from '../nav/Nav';
import Separator from '../separator/Separator';
import Description from '../description/Description';
import SeparatorLine from '../separatorLine/SeparatorLine';
import FilterCard from '../filterCard/FilterCard';
import CardList from '../cardList/CardList';
import './ourCoffeePage.scss'
import descrImg from '../../resources/img/our_coffee_img.png'

const OurCoffeePage = () => {
    const [descr, setDescr] = useState('')

    useEffect(() => {

        setDescr(
            <div className="descr_div">
                `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. <br /> <br />
                Afraid at highly months do things on at. Situation recommend objection do intention<br />
                so questions. <br /> 
                As greatly removed calling pleased improve an. Last ask him cold feel<br />
                met spot shy want. Children me laughing we prospect answered followed. At it went<br />
                is song that held help face. </div>
        )
    }, [])

    return (
        <>
            <header className="OurCoffeePage">
                <Nav/>
                <h1 className="our_coffee_h1">Our Coffee</h1>
            </header>
            <section className='about_our_beans'>
                <Description src={descrImg} title='About our beans' descr={descr}/>
                <SeparatorLine/>
                <FilterCard/>
                <CardList/>
            </section>
        </>
        
        
    )
}

export default OurCoffeePage;
