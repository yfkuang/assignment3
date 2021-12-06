import "./styles.css"
import PropTypes from 'prop-types'
import { useGetImage } from '../../../hooks/useGetImage'

export const Card = (props) => {
    const [imgsrc] = useGetImage(props.id)

    return (
        <div className="card">
            <img src={[imgsrc]} alt={props.name}/>
            <h3>{ props.name }</h3>
        </div>
    )
}

Card.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string
};