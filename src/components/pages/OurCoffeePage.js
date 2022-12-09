
import {Nav, Description, SeparatorLine, FilterCard, CardList, Footer, TagH1, ErrorBoundary} from '../index'
import './styles/ourCoffeePage.scss'
import data from '../../server/db'

const OurCoffeePage = () => {

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
                <FilterCard/>
                <ErrorBoundary>
                    <CardList/>
                </ErrorBoundary>
            </section>
            <Footer/>
        </>
        
        
    )
}

export default OurCoffeePage;
