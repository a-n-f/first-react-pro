// import { useEffect, useState } from "react";
import { useGetDatas } from "../getDatas/getDatas.js";

const PostsComponent = () => {
    console.log("PostsComponent");

    const {data, loading, err} = useGetDatas("https://jsonplaceholder.typicode.com/posts");


    if (loading) return(
        <div className="flex justify-center items-center min-h-[480px]">
            <div className="bg-blue-50 border-2 border-blue-300 px-8 py-6 rounded-xl shadow-md">
                <strong className="animate-pulse text-blue-600 text-xl font-semibold">loading...</strong>
            </div>
        </div>
    )


    if (data) return (
        <div className="overflow-y-auto max-h-[480px] min-h-[480px] p-2 sm:p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {data.map(post => (
                    <div key={post.id} className="bg-white border border-gray-200 rounded-lg p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow duration-200 hover:border-purple-300">
                        <div className="flex items-start justify-between mb-3">
                            <span className="bg-purple-100 text-purple-700 text-xs font-bold px-2.5 py-1 rounded-full">
                                #{post.id}
                            </span>
                        </div>
                        <h3 className="text-gray-800 font-bold text-base sm:text-lg mb-2 line-clamp-2">
                            {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base line-clamp-3 leading-relaxed">
                            {post.body}
                        </p>
                    </div>
                ))}
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

    return null;
}

export default PostsComponent ;