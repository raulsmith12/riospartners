import { RxHamburgerMenu } from 'react-icons/rx';

const Header = () => {
    return (
        <header className="main-header">
            <img src="img/Logo.png" height="35" alt="Rios Partners logo" />
            <a href="#main-menu" id="main-menu-toggle" className="menu-toggle" aria-label="Open menu">
                Menu&nbsp;&nbsp;
                <RxHamburgerMenu />
            </a>
            <nav id="main-menu" className="main-menu" aria-label="Main menu">
                <a href="#main-menu-toggle" id="main-menu-close" className="menu-close" aria-label="Close menu">
                    <span aria-hidden="true">X</span>
                </a>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <a href="#main-menu-toggle" className="backdrop" tabIndex="-1" aria-hidden="true" hidden></a>
        </header>
    )
}

export default Header;