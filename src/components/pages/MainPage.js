import MainSearch from "../mainSearch/MainSearch";
import MainFilter from "../mainFilter/MainFilter";
import MainFoodList from "../mainFoodList/MainFoodList";

const MainPage = () => {
    return (
        <div className='mainBgFooter'>
            <MainSearch/>
            <MainFilter/>
            <MainFoodList/>
        </div>
    )
}

export default MainPage;