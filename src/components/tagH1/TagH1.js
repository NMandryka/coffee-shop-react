 
import './tagH1.scss'

const TagH1 = ({text, marginTop}) => {
    return (
        <h1 className="h1" style={{marginTop: marginTop}}>{text}</h1>
    )
}

export default TagH1;