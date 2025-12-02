import { useEffect, useState } from "react";
import './UserComponent.css';


const UserComponent = () => {

    const [age, setAge] = useState(22)

    // useEffect(()=>{},[])     == 2parametr
    useEffect(() => {
        // Mount
        console.log("Mount UserComponent");
        
        return () => {
            // UnMount
            console.log("UnMount UserComponent");
        }
    },[])
    
    useEffect(() => {
        console.log(age);
        if (age === 30) {
            console.log("age is 30");
        }
    }, [age])
    

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