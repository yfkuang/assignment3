import "./styles.css"
import PropTypes from 'prop-types'
import { useGetImage } from '../../../hooks/useGetData'

export const Card = (props) => {

    return (
        <div className="card">
            { props.name }
        </div>
    )
}

Card.propTypes = {
    name: PropTypes.string
};