import NotificationsSearch from "../notificationsSearch/NotificationSearch";
import NotificationOrders from "../notificationOrders/NotificationOrders";

const NotificationPage = () => {
    const footerOn = localStorage.getItem("footerOn");
    let clazz = `mainBgFooter`;
    if(footerOn === `true`){
        clazz = 'mainBgForm'
    } else if(footerOn === `false`){
        clazz = 'mainBgFooter'
    }
                        
    return (
        <div className={clazz}>
            <NotificationsSearch/>
            <NotificationOrders/>
        </div>
    )
}

export default NotificationPage