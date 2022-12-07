
import './separator.scss'
import coffeeBeens from '../../resources/icon/separator_coffee_beens.svg'
import coffeeBeensBlack from '../../resources/icon/separator_coffee_beens_black.svg'

const Separator = ({type}) => {

    let clazzForLine = ''

    if(type === 'black') {
        clazzForLine = 'black'
    }

    return (
        <div className='separator'>
            <div className={`line ${clazzForLine}`}></div>
            <img src={clazzForLine === 'black' ? coffeeBeensBlack : coffeeBeens} alt="coffeeBeens" className="separator_img" />
            <div className={`line ${clazzForLine}`}></div>
        </div>
    )

}

export default Separator;