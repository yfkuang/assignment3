import "./styles.css"
import PropTypes from 'prop-types'
import { useGetImage } from '../../../hooks/useGetImage'
import { Link } from 'react-router-dom'

export const Card = (props) => {
    const [imgsrc] = useGetImage(props.id)

    return (
        <div className="card">
            <Link to={{pathname: `/fighter/${props.id}`}}><img src={[imgsrc]} alt={props.name}/></Link>
            <Link to={{pathname: `/fighter/${props.id}`}}>{ props.name }</Link>
        </div>
    )
}

Card.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string
};