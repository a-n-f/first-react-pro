const ChildComponent = ({name , age , job , handelDelet}) => {

    console.log("childe Fn");

    return (
        <div>
            <ul>
                <li><strong>name:</strong> {name}</li>
                <li><strong>age:</strong> {age}</li>
                <li><strong>job:</strong> {job}</li>
                <li><button onClick={() => handelDelet(name)}>Delet</button></li>
            </ul>
        </div>
    )
}

export default ChildComponent ;