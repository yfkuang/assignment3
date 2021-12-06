import logo from '../../assets/logo.png';
import "./styles.css"
import { Nav } from './nav'
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header id="top">
            <Link to={{pathname: '/'}}><img src={logo} alt="Logo" /></Link>
            <Link to={{pathname: '/'}}>Home</Link>
        </header>
    )
}
