import logo from '../images/logo.png';
import '../css/Header.css';

function Header() {
  return (
    <header className="header">
      <div className='header__content'>
        <div className='header__logo'>
          <figure className='header__logo-image'>
            <img className='header__logo-img' src={logo} alt='logo' />
          </figure>
        </div>
        <div className='header__menu'>
          <ul className='header__list'>
            <li className='header__list-element'><a href='#'>STUDIO</a></li>
            <li className='header__list-element'><a href='#'>PURPOSE</a></li>
            <li className='header__list-element'><a href='#'>PRODUCTS</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
