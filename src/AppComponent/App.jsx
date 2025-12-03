import { useEffect, useRef, useState } from "react"

const App = () => {
  
  let inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])
  
  return (
    <div className={`bg-gray-500 flex-col text-white flex justify-center w-auto m-5 p-10 rounded-2xl text-center text-3xl font-bold`}>
      <h1>Hey</h1>
      <input ref={inputRef} className="bg-white rounded-lg max-w-[40%] mx-auto mt-10 text-gray-700 placeholder:text-gray-400" placeholder="enter lorem"/>
    </div>
  )
}

export default App
