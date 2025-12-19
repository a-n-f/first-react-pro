import { useCallback, useState } from "react";


const App = () => {
  console.log("appcomponent render");
  

  const [number, setNumber] = useState(5 + 101 + 202 + 303 + 404 + 505 + 606 + 707 + 808 + 909 + 1010)
  const [text, setText] = useState("")

  const handleCount = useCallback(() => {
    console.log("number", number);
    setNumber((prev) => prev + 1)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white rounded-xl shadow-2xl p-8 flex flex-col items-center w-80">

        <div className="mb-6">
          <span className="w-24 mx-auto h-24 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 shadow-lg text-4xl font-bold text-white hover:scale-105 transition-transform duration-200">
            {number}
          </span>
          <button onClick={handleCount} className="block text-gray-500 mt-2 text-sm hover:text-blue-500 bg-gray-200 rounded-md p-2 cursor-pointer">برای تغییر عدد اینجا کلیک کنید</button>
        </div>

        <div className="w-full flex flex-col items-center">
          <input
            className="w-full px-4 py-2 rounded border-2 border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-colors mb-2"
            placeholder="متن خود را وارد کنید..."
            value={text}
            onInput={(e) => setText(e.target.value)}
          />
          <div className="text-gray-700 font-medium mt-1">
            <p className="cursor-default">{text}</p>
          </div>
        </div>

      </div>
    </div>
  )

}

export default App ;
