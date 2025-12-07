import { useGetDatas } from "../getDatas/getDatas";


const UsersComponent = () => {
    console.log("UsersComponent");

    const {data, loading, err} = useGetDatas("https://jsonplaceholder.typicode.com/users");

    if (loading) return(
        <div className="flex justify-center items-center min-h-[480px]">
            <div className="bg-blue-50 border-2 border-blue-300 px-8 py-6 rounded-xl shadow-md">
                <strong className="animate-pulse text-blue-600 text-xl font-semibold">loading...</strong>
            </div>
        </div>
    )


    if (data) return (
        <div className={`border-2 flex flex-col gap-6 border-gray-400 overflow-y-scroll p-3 rounded-lg max-h-[480px] min-h-[480px]`}>
            {data.map(user => (
                <div key={user.id} className={`flex border-b-2 border-b-fuchsia-200 justify-between py-4 px-3`}>
                    <div><p>{user.id}</p></div>
                    <div><strong>{user.name}</strong></div>
                    <div><a href="" className="border-b-2 border-b-blue-700">{user.email}</a></div>
                </div>
            ))}
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

    return null;
}

export default UsersComponent;