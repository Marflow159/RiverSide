import './notificationSearch.scss'
const NotificationsSearch = () => {
    let date = new Date().toGMTString().slice(0, 16)

    return (
        <>
        <div className="notSearch">
            <div>
                <h1>Notification</h1>
                <p>{`${date}`}</p>
            </div>
        </div>
        <span className='lineDown'></span>
        </>
        
    )
}
export default NotificationsSearch;