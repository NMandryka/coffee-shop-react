
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Nav, TagH1, Separator, Footer} from '../index'
import data from '../../server/db'
import './styles/singleCoffeePage.scss'

const SingleCoffeePage = () => {

    const [coffeeProps, setCoffeeProps] = useState({})
    const {id} = useParams();

    useEffect(() => {
        data.coffeeList.forEach(item => {
            if(item.id === +id) {
                setCoffeeProps(item)
            }
        })
    }, [])
    
    const {name, country, description, price, src} = coffeeProps;

    return (
        <>
            <header className='single_coffee_page'>
            <div className="container">
                    <Nav/>
                    <TagH1 text='Our Coffee'/>
                </div> 
            </header>
            <section className="about_it">
                <img src={src} alt={name} className="single_coffee_page_img" />
                <div className="wrap">
                    <h2 className="title">{name}</h2>
                    <Separator type="black"/>
                    <div className="country"><span>Country:</span> {country}</div>
                    <div className="descr"><span>Description:</span> {description}</div>
                    <div className="price">{price}</div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default SingleCoffeePage;