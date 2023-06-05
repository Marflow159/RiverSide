import { NavLink } from "react-router-dom";

import logo from '../resources/img/navImg/logo.png'
import home1 from '../resources/img/navImg/Home1.png'
import home2 from '../resources/img/navImg/Home2.svg'
import discount1 from '../resources/img/navImg/Discount1.png'
import discount2 from '../resources/img/navImg/Discount2.svg'
import notification1 from '../resources/img/navImg/Notification1.png'
import notification2 from '../resources/img/navImg/Notification2.svg'
import user1 from '../resources/img/navImg/2User1.png'
import user2 from '../resources/img/navImg/2User2.svg'
import setting1 from '../resources/img/navImg/Setting1.png'
import setting2 from '../resources/img/navImg/Setting2.svg'

import './header.scss'

const Header = () => {
    return (
        <header className="header">
            <nav className="header__nav">
                <NavLink to='/'>
                    <img src={logo} alt="" />
                </NavLink>
                <NavLink to='/' className={({ isActive }) => (isActive ? 'activeBox' : 'noActiveBox')}>
                    <img src={home1} alt="" />
                    <img src={home2} alt="" />
                </NavLink>
                <NavLink to='/sales' className={({ isActive }) => (isActive ? 'activeBox' : 'noActiveBox')}>
                    <img src={discount1} alt="" />
                    <img src={discount2} alt="" />
                </NavLink>
                <NavLink to='/notification' className={({ isActive }) => (isActive ? 'activeBox' : 'noActiveBox')}>
                    <img src={notification1} alt="" />
                    <img src={notification2} alt="" />
                </NavLink>
                <NavLink to='/user' className={({ isActive }) => (isActive ? 'activeBox' : 'noActiveBox')}>
                    <img src={user1} alt="" />
                    <img src={user2} alt="" />
                </NavLink>
                <NavLink to='/setting' className={({ isActive }) => (isActive ? 'activeBox' : 'noActiveBox')}>
                    <img src={setting1} alt="" />
                    <img src={setting2} alt="" />
                </NavLink>
            </nav>
        </header>
    )
}

export default Header;