import { NavLink } from "react-router-dom";
import { useState } from "react";

import logo from '../resources/img/navImg/logo.png'
import home1 from '../resources/img/navImg/Home1.png'
import home2 from '../resources/img/navImg/Home2.svg'
import notification1 from '../resources/img/navImg/Notification1.png'
import notification2 from '../resources/img/navImg/Notification2.svg'


import './header.scss'

const Header = () => {

    const [navigate, setNavigate ] = useState('home')

    const swapNav = (isActive, name) => {
        if(isActive){
            setNavigate(name)
            return 'activeBox'
        } else {
            return 'noActiveBox'
        }
    }

    return (
        <header className="header">
            <nav className="header__nav">
                <span className={navigate}></span>
                <NavLink to='/'>
                    <img src={logo} alt="" />
                </NavLink>
                <NavLink to='/' className={({ isActive  } ) => (swapNav(isActive, 'home'))}>
                    <img src={home1} alt="" />
                    <img src={home2} alt="" />
                </NavLink>
                <NavLink to='/notification' className={({ isActive }) => (swapNav(isActive, 'notification'))}>
                    <img src={notification1} alt="" />
                    <img src={notification2} alt="" />
                </NavLink>
            </nav>
        </header>
    )
}

export default Header;