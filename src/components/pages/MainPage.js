import MainSearch from "../mainSearch/MainSearch";
import MainFilter from "../mainFilter/MainFilter";
import MainFoodList from "../mainFoodList/MainFoodList";

const MainPage = () => {
    const footerOn = localStorage.getItem("footerOn");
    let clazz = `mainBgFooter`;
    if(footerOn === `true`){
        clazz = 'mainBgForm'
    } else if(footerOn === `false`){
        clazz = 'mainBgFooter'
    }
                        
    return (
        <div className={clazz}>
            <MainSearch/>
            <MainFilter/>
            <MainFoodList/>
        </div>
    )
}

export default MainPage;