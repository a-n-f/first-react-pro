import { permissionHOC } from "../permissionHOC/permissionHOC";
import { createPortal } from "react-dom";

const AddUserComponent = ({showModalFn}) => {

    return createPortal( (
      <div 
          className="fixed inset-0 bg-gray-800/70  bg-opacity-40 flex items-center justify-center z-50"
          onClick={() => showModalFn(false)}>

          <div 
            className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md flex flex-col items-center relative"
            onClick={(e) => e.stopPropagation()}>

            <h2 className="text-xl font-bold mb-6 text-gray-800">افزودن کاربر جدید</h2>

            <form className="w-full flex flex-col gap-4">
              <div className="flex flex-col w-full">
                <label htmlFor="name" className="mb-1 text-sm font-medium text-gray-700">نام</label>
                <input
                  type="text"
                  id="name"
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 transition text-gray-900"
                  placeholder="نام را وارد کنید" />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="email" className="mb-1 text-sm font-medium text-gray-700">ایمیل</label>
                <input
                  type="email"
                  id="email"
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 transition text-gray-900"
                  placeholder="ایمیل را وارد کنید" />
              </div>
              <button type="submit" onClick={(e) => e.preventDefault()}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md py-2 mt-4 transition">
                ذخیره
              </button>
            </form>
          </div>
          
      </div>
      ) 
      , document.getElementById("modalRoot"))
}

export default permissionHOC(AddUserComponent) ;