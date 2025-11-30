const ChildComponent = ({name , age , job}) => {
    
    const handelDelet = (e) => {
        console.log("DELET" , e);
    }

    const handelChange = (e, txt) => {
        console.log(e.target.value , txt);
    }

    return (
        <div>
            <ul>
                <li><strong>name:</strong> {name}</li>
                <li><strong>age:</strong> {age}</li>
                <li><strong>job:</strong> {job}</li>
                <li><button onClick={handelDelet}>Delet</button></li>
                <li><input onChange={(e) => handelChange(e, "test")} /></li>
            </ul>
        </div>
    )
}

export default ChildComponent ;