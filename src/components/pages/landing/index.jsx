import "./styles.css"
import { useGetData } from '../../../hooks/useGetData'
import { Card } from '../../fighters/card'

export const Index = () => {
    const [documents] = useGetData()

    const displayFighterCards = () => {
        let content = [];
        
        for (let fighter in [documents][0]) {
            content.push(<Card key={fighter} id={fighter} name={[documents][0][fighter].first_name + " " + [documents][0][fighter].last_name} />)
        }
        return content;
    };

    return (
        <div className="container">
            {displayFighterCards()}
        </div>
    )
}
