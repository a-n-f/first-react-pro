const Car = props => {
    
    let {make, model, year, color, price} = props ;
    return (
        <div>
            <h2>Car Information</h2>
            <ul>
                <li><strong>make:</strong> {make} </li>
                <li><strong>model:</strong> {model} </li>
                <li><strong>year:</strong> {year} </li>
                <li><strong>color:</strong> {color} </li>
                <li><strong>price:</strong> {price} </li>
            </ul>
        </div>
    )
}

export default Car ;