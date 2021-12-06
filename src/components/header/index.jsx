import logo from '../../assets/logo.png';
import "./styles.css"
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header id="top">
            <Link to={{pathname: '/'}}><img src={logo} alt="Logo" /></Link>
        </header>
    )
}
