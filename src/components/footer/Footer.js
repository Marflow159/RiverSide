import './footer.scss'

import basket from '../resources/img/navImg/basket.png'

const Footer = () => {

    const swapFooter = () => {
        document.querySelector(`.mainBgFooter`).className = 'mainBgForm'
        document.querySelector(`.footer`).className = `footer footerNoActive`
        document.querySelector(`.buyForm`).className = `buyForm footerActive`
    }

    return (
        <footer className="footer footerActive">
            <button onClick={() => swapFooter()}><img src={basket} alt="basket" /></button>
        </footer>
    )
}

export default Footer