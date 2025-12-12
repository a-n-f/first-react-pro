import { Link, useParams } from "react-router";
import { useGetDatas } from "../getDatas/getDatas";

const UserDetailsComponent = () => {
    const {userId} = useParams();
    
    const {loading, data, err} = useGetDatas(`https://jsonplaceholder.typicode.com/users/${userId}`)
    
    if (loading) return (
        <div className="flex justify-center items-center min-h-[480px]">
            <div className="bg-blue-50 border-2 border-blue-300 px-8 py-6 rounded-xl shadow-md">
                <strong className="animate-pulse text-blue-600 text-xl font-semibold">loading...</strong>
            </div>
        </div>
    )

    if (data) return (
        <div className="fixed top-0 right-0 justify-items-center bottom-0 left-0 backdrop-blur-sm bg-gray-500/50">
            <div className="userDetails my-[5rem] w-[50%] py-6 flex gap-10 border-2 justify-center items-center border-gray-400 rounded-sm bg-gray-50">
                <div className="userID bg-[#a284bc] text-white w-[5rem] h-[5rem] content-center text-xl font-bold rounded-full">
                    <p className="text-center">{userId}</p>
                </div>
                <div className="userInfo flex flex-col gap-4">
                    <div className="userName bg-gray-200 px-3 py-1 text-center text-sm font-normal rounded-sm border-[1px] border-gray-300">
                        <strong>{data.name}</strong>
                    </div>
                    <div className="userEmail bg-gray-200 px-3 py-1 text-center text-sm font-normal rounded-sm border-[1px] border-gray-300">
                        <strong>{data.email}</strong>
                    </div>
                </div>
                <Link to="/users" className=" bg-blue-500 text-white text-xl px-6 py-2 rounded-sm">
                    بازگشت
                </Link>
            </div>
        </div>
    )
    
    if (err) return (
        <div className="flex justify-center items-center min-h-[480px]">
            <div className="bg-red-50 border-2 border-red-500 px-8 py-6 rounded-xl shadow-md text-center w-full">
                <strong className="text-red-800 text-xl font-bold block mb-2">خطا!</strong>
                <p className="text-red-600 text-base">{err.message || err}</p>
            </div>
        </div>
    )

    return (
        <h1> این وسط یک چیزی نادرسته :/ </h1>
    )
}

export default UserDetailsComponent ;