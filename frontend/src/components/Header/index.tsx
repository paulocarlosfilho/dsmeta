import logo from '../../assets/img/logo.svg';
import './style.css';

function Header() {

    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>Made By</h1>
                <p>Paulo, Bruno, Leandro e Luciana</p>
            </div>
        </header>

    )
}

export default Header;