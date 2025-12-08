import { useEffect, useReducer } from "react"

const users = [
    {id:1, name:"amir", email:"amir@gmail.com"},
    {id:2, name:"javad", email:"javad@gmail.com"},
    {id:3, name:"mmd", email:"mmd@gmail.com"},
    {id:4, name:"moeen", email:"moeen@gmail.com"},
    {id:5, name:"mohsen", email:"mohsen@gmail.com"},
    {id:6, name:"mahdi", email:"mahdi@gmail.com"},
    {id:7, name:"fati", email:"fati@gmail.com"},
    {id:8, name:"mfjf", email:"mfjf@gmail.com"},
    {id:9, name:"srto", email:"srto@gmail.com"},
]

export const useGetDatas = (url) => {

    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case "FETCH_START":
                return {loading:true , data:null , err:null}             
            case "FETCH_SUCCESS":
                return {loading:false , data:action.payload , err:null}             
            case "FETCH_ERROR":
                return {loading:false , data:null , err:action.payload}             
            
            default:
                return state
        }
    }, {loading:false, data:null, err:null})


    useEffect(() => {
        let isCancelled = false;

        dispatch({type:"FETCH_START"})
        fetch(url)
        .then(res => {
                if (!res.ok) throw new Error(" خطا در دریافت اطلاعات!! ")
                return res.json()
            })
            .then(posts => {
                if (!isCancelled) {
                    dispatch({type:"FETCH_SUCCESS" , payload:posts})
                }
            })
            .catch(error => {
                if (!isCancelled) {
                    dispatch({type:"FETCH_ERROR" , payload:error})
                }
            })
        
        return () => {
            isCancelled = true;
        }
            
    }, [url])

    
    return { loading:state.loading, data:users , err:state.err }
}