import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';

import basket from '../resources/img/navImg/Cart.png'
import logo from '../resources/img/navImg/logo.png'

import './footer.scss'
const Footer = () => {

    const { orderDishes } = useSelector(state => state.foods);

    const swapFooter = () => {
        localStorage.setItem("footerOn", true)
        const footerOn = localStorage.getItem("footerOn")
        if (footerOn === `true`) {
            document.querySelector(`.mainBgFooter`).className = 'mainBgForm'
            document.querySelector(`.footer`).className = `footer footerNoActive`
            document.querySelector(`.buyForm`).className = `buyForm footerActive`
        }
    }


    const footerOn = localStorage.getItem("footerOn");
    let clazz = `footer footerActive`;
    if (footerOn === `true`) {
        clazz = 'footer footerNoActive'
    } else if (footerOn === `false`) {
        clazz = 'footer footerActive'
    }

    const activeBurger = () => {
        let burgerBtn = document.querySelector('.burger');
        let burgerMenu = document.querySelector('.header')

        burgerBtn.classList.toggle('active')
        burgerMenu.classList.toggle('active')

    }

    return (
        <footer className={clazz}>
            <button onClick={() => activeBurger()} className='burger'>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <NavLink to='/' className="burgerHome">
                <img src={logo} alt="" />
            </NavLink>
            <button onClick={() => swapFooter()}><img src={basket} alt="basket" /> <span className="orderCount">{orderDishes.length}</span></button>
        </footer>
    )
}

export default Footer
