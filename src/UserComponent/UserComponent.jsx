import { useEffect, useState } from "react";
import style from './UserComponent.module.css';


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
        <div className={style.userContainer}>
            <h1 className={style.userTitle}>UserComponent</h1>
            <button className={style.userBtn} onClick={() => setAge(prev => prev + 1)}>change age</button>
            <ol className={style.userOl}>
                <li className={style.userLi}><strong className={style.userStr}>name: </strong>amir</li>
                <li className={style.userLi}><strong className={style.userStr}>family: </strong>niazi</li>
                <li className={style.userLi}><strong className={style.userStr}>age: </strong>{age}</li>
            </ol>
        </div>
    )
}

export default UserComponent ;