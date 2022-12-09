
import Separator from '../separator/Separator';
import './description.scss'

const Description = ({src, title, descr}) => {
    return (
        <div className='descr'>
            <img src={src} alt="coffee" className="descr_img" />
            <div className="descr_wrap">
                <h2 className='descr_title'>{title}</h2>
                <Separator type="black"/>
                {descr}
            </div>
        </div>
    )
} 

export default Description;