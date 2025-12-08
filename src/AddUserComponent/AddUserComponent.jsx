import { Fragment } from "react";
import { Link } from "react-router";

const AddUserComponent = () => {
    return (
        <div className={`fixed top-0 right-0 bottom-0 left-0 backdrop-blur-sm bg-gray-500/50`}>
                <form className={` flex items-center justify-center my-8 p-2 rounded-lg`} dir="rtl" novalidate>
                    <div className={`flex flex-col  items-center gap-8`}>
                        <div>
                            <strong className={`text-3xl text-gray-900 font-serif`}>
                                افزودن کاربر
                            </strong>
                        </div>
                        <div className={`w-full`}>
                            <label for="signup-name"> نام کاربر </label>
                            <input id="signup-name" className={`border-2 text-gray-900 border-gray-300 my-2 rounded-sm p-2 w-full focus:outline-0`} placeholder="John Doe"/>
                        </div>
                        <div className={`w-full`}>
                            <label for="signup-email"> ایمیل کاربر </label>
                            <input id="signup-email" className={`border-2 text-gray-900 border-gray-300 my-2 rounded-sm p-2 w-full focus:outline-0`} placeholder="mohsen@gmail.com"/>
                        </div>
                        <label for="signup-submitted" class="cursor-pointer submit-btn-label">
                            <span id="signup-submitted" className={`bg-blue-300 text-white text-xl px-6 py-2 rounded-sm`}>Sign Up</span>
                        </label>
                    </div>
                </form>
                <Link to="/users" className="absolute top-[85%] left-[45%] bg-blue-500 text-white text-xl px-6 py-2 rounded-sm">
                    بازگشت
                </Link>
        </div>
    )
}

export default AddUserComponent ;