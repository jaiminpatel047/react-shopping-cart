import './style.css'
import {Link} from 'react-router-dom';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { useState } from 'react';

const Header = ({size}) => {

  const [burgerMenu, setBurgerMenu] = useState('hide');

  const BURGERMENU = () => {
    setBurgerMenu(burgerMenu === 'hide' ? 'show' : 'hide');
  }

  return (
    <div className='navbar'>
            <div className='header'>
                <div className="logo">
                  <Link to="/">
                      <img className='header-logo' src="../image/restaurant.png" alt="logo" />
                      <span className=''>React Piza</span>
                  </Link>
                  </div>
                <ul className='header-menu'>
                    <li><Link to='/' className='menu'>HOME</Link></li>
                    <li><Link to='/About' className='menu'>About</Link></li>
                    <li><Link to='/Contact' className='menu'>Contact</Link></li>
                </ul>
                <div className='header-icon'>
                      <Link to='/Cart' className='header-cart'><p className='addCartItem'>{size}</p><i className="fa-solid fa-store"></i></Link>
                </div>
                <div className='headerBurgerMenu' onClick={BURGERMENU}>
                   <DehazeIcon />
                </div>
            </div>
            <div className={`responsive-nev ${burgerMenu}`}>
                   <div className='menu'>
                        <div className='resp-menu'><Link to='/' className='responsive-nev-link'>HOME</Link></div>
                        <div className='resp-menu'><Link to='/About' className='responsive-nev-link'>About</Link></div>
                        <div className='resp-menu'><Link to='/Contact' className='responsive-nev-link'>Contact</Link></div>
                        <div className='resp-menu'><Link to='/Cart' className='responsive-nev-link'>Cart</Link></div>
                   </div>
            </div>
    </div>
  )
}

export default Header;