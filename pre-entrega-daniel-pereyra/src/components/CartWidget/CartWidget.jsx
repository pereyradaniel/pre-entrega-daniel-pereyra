import "./CartWidget.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'


export const CartWidget = () => {
   
    return(
        <div>
            <FontAwesomeIcon className="icono" icon={faCartArrowDown}/>
            <span className="textIcon">5</span>
        </div>
    )
}