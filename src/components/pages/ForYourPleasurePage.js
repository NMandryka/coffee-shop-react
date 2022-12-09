
import {Nav, Description, CardList, Footer, SeparatorLine, TagH1, ErrorBoundary} from '../index'
import './styles/forYourPleasurePage.scss'
import data from '../../server/db'

const ForYourPleasurePage = () => {
    return (
        <>
            <header className='for_your_pleasure'>
                <div className="container">
                    <Nav/>
                    <TagH1 text="For your pleasure"/>
                </div> 
            </header>
            <section className="about_our_goods">
                <Description src={data.aboutOurGoods.src} title={data.aboutOurGoods.title} descr={data.aboutOurGoods.description}/>
                <SeparatorLine/>
                <ErrorBoundary>
                    <CardList/>
                </ErrorBoundary>
            </section>
            <Footer/>
        </>
    )
}

export default ForYourPleasurePage;