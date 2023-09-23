import { NavLink } from "react-router-dom";
import { useState } from "react";

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

    const [navigate, setNavigate ] = useState()

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
                <NavLink to='/sales' className={({ isActive }) => (swapNav(isActive, 'sales'))}>
                    <img src={discount1} alt="" />
                    <img src={discount2} alt="" />
                </NavLink>
                <NavLink to='/notification' className={({ isActive }) => (swapNav(isActive, 'notification'))}>
                    <img src={notification1} alt="" />
                    <img src={notification2} alt="" />
                </NavLink>
                <NavLink to='/user' className={({ isActive }) => (swapNav(isActive, 'user'))}>
                    <img src={user1} alt="" />
                    <img src={user2} alt="" />
                </NavLink>
                <NavLink to='/setting' className={({ isActive }) => (swapNav(isActive, 'setting'))}>
                    <img src={setting1} alt="" />
                    <img src={setting2} alt="" />
                </NavLink>
            </nav>
        </header>
    )
}

export default Header;