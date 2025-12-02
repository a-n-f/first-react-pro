import './GuestComponent.css' ;

const GusetComponent = () => {
    console.log("GusetComponent");
    
    return (
        <div className="guestContainer">
            <h1 className='guestTitle'>GusetComponent</h1>
            <p className='guestDescription'>please login to see your information</p>
        </div>
    )
}

export default GusetComponent ;