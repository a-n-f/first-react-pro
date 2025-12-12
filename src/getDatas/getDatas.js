import { useEffect, useReducer } from "react"

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

    
    return { loading:state.loading, data:state.data , err:state.err }
}