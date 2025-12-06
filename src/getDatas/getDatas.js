import { useEffect, useState } from "react"

export const useGetDatas = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState(null)


    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) throw new Error(" خطا در دریافت اطلاعات!! ")
                return res.json()
            })
            .then(posts => {
                setData(posts)
                setLoading(false)
            })
            .catch(error => {
                setErr(error)
                setLoading(false)
            })
            
    }, [url])

    return {data , loading , err}
}