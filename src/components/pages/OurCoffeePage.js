
import { useState } from 'react'
import {Nav, Description, SeparatorLine, FilterCard, CardList, Footer, TagH1, ErrorBoundary} from '../index'
import './styles/ourCoffeePage.scss'
import data from '../../server/db'

const OurCoffeePage = () => {

    const [term, setTerm] = useState('')
    const [countryFilter, setCountryFilter] = useState('')

    const onUpdateSeacrh = term => {
        setTerm(term)
    }

    const onCountryFilter = country => {
        setCountryFilter(country)
    }

    return (
        <>
            <header className="ourCoffeePage">
                <div className="container">
                    <Nav/>
                    <TagH1 text='Our Coffee'/>
                </div> 
            </header>
            <section className='about_our_beans'>
                <Description src={data.aboutOurBeans.src} title={data.aboutOurBeans.title} descr={data.aboutOurBeans.description}/>
                <SeparatorLine/>
                <FilterCard onUpdateSeacrh={onUpdateSeacrh} onCountryFilter={onCountryFilter}/>
                <ErrorBoundary>
                    <CardList term={term} countryFilter={countryFilter}/>
                </ErrorBoundary>
            </section>
            <Footer/>
        </>
        
        
    )
}

export default OurCoffeePage;
