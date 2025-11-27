const ChildComponent = ({name , age , job}) => {
    
    return (
        <div>
            <ul>
                <li><strong>name:</strong> {name}</li>
                <li><strong>age:</strong> {age}</li>
                <li><strong>job:</strong> {job}</li>
            </ul>
        </div>
    )
}

export default ChildComponent ;