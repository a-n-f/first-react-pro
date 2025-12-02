import style from './GuestComponent.module.css' ;

const GusetComponent = () => {
    console.log("GusetComponent");
    
    return (
        <div className={style.guestContainer}>
            <h1 className={style["guest-title"]}>GusetComponent</h1>
            <p className={`${style.guestDescription} 2class`}>please login to see your information</p>
        </div>
    )
}

export default GusetComponent ;