
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Nav, TagH1, Separator, Footer} from '../index'

import './styles/singleCoffeePage.scss'
import data from '../../server/db'
import img from '../../resources/img/singleCardImg.jpg'

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
    
    const {name, country, description, price} = coffeeProps;
    
    return (
        <>
            <header className='single_coffee_page'>
            <div className="container">
                    <Nav/>
                    <TagH1 text='Our Coffee'/>
                </div> 
            </header>
            <section className="about_it">
                <img src={img} alt={name} className="single_coffee_page_img" />
                <div className="wrap">
                    <h2 className="title">{name}</h2>
                    <Separator type="black"/>
                    <div className="country"><span>Country:</span> {country}</div>
                    <div className="descr_about_it"><span>Description:</span> {description}</div>
                    <div className="price_about_it"><span className='price_word'>price:</span> <span className='price'>{price}</span></div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default SingleCoffeePage;