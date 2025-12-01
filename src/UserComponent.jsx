import { useState } from "react";

const UserComponent = () => {

    console.log("UserComponent");

    const [age, setAge] = useState(22)

    return(
        <div>
            <h1>UserComponent</h1>
            <button onClick={() => setAge(prev => prev + 1)}>change age</button>
            <ol>
                <li><strong>name: </strong>amir</li>
                <li><strong>family: </strong>niazi</li>
                <li><strong>age: </strong>{age}</li>
            </ol>
        </div>
    )
}

export default UserComponent ;