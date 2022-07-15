import logo from '../../assets/img/logo.svg'
import './style.css'

function Header() {

    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
            </div>
        </header>

    )
}

export default Header