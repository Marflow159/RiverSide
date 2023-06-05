import './mainFoodListItem.scss'

const MainFoodListItem = ({onAddToOrder, name, price, img}) => {

    return(
        <div className="foodListItem">
            <img src={img} alt="" />
            <p>{name  }</p>
            <p>$ {price}</p>
            <button onClick={() => onAddToOrder()}>Order now</button>
        </div>
    )
}

export default MainFoodListItem