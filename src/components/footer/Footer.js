import './footer.scss'

import basket from '../resources/img/navImg/basket.png'

const Footer = () => {

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
    if(footerOn === `true`){
        clazz = 'footer footerNoActive'
    } else if(footerOn === `false`){
        clazz = 'footer footerActive'
    }

    return (
        <footer className={clazz}>
            <button onClick={() => swapFooter()}><img src={basket} alt="basket" /></button>
        </footer>
    )
}

export default Footer
