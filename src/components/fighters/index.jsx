import "./styles.css"
import { useGetData } from '../../hooks/useGetData'
import { useGetImage } from '../../hooks/useGetImage'
import {
    useParams
} from "react-router-dom"
import Flags from 'country-flag-icons/react/3x2'

export const Fighters = () => {
    const { id } = useParams();
    const [documents] = useGetData(id)
    const [imgsrc] = useGetImage(id)

    console.log([documents])

    return (
        <div className="fighter-container">
            <img className="profile" src={[imgsrc]} alt={[documents][0].first_name + " " + [documents][0].last_name }/>
            <h1>{ [documents][0].first_name } "{[documents][0].epithet}" { [documents][0].last_name }</h1>
            <p><b>Record: </b>{[documents][0].wins}W-{[documents][0].losses}L-{[documents][0].draws}D</p>
            <p><b>Division: </b>{[documents][0].weight_class}</p>
            <p><b>Team: </b>{[documents][0].team}</p>
            <p><b>Nationality: </b>{[documents][0].nationality}</p>
            <p><b>Date of Birth: </b>{[documents][0].dob}</p>
            <p><b>Height: </b>{[documents][0].height}cm</p>
            <p><b>Weight: </b>{[documents][0].weight}lbs</p>
            <p><b>Reach: </b>{[documents][0].reach}in</p>
        </div>
    )
}
