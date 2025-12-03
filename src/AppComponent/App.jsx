import { useEffect, useState } from "react"

const App = () => {
  console.log("App Component");
  
  const [count, setCount] = useState(0)
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    if (count % 10 === 0 && count !== 0) {
      setNotification(` تبریک 🤞 شما به عدد ${count} رسیدید `)
      setTimeout(() => {
        setNotification(null)
      }, 3000);
    }
  
  }, [count])


  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 via-purple-500 to-purple-700 flex items-center justify-center relative p-8">

      <div className="bg-transparent border-2 border-white rounded-lg p-8 w-full max-w-md">

        <h1 className="text-white text-2xl font-bold text-center mb-6">شمارنده هوشمند</h1>
        
        {/* Counter Display */}
        <div className="border-2 border-white rounded-lg p-8 mb-6">
          <div className="text-white text-7xl font-bold text-center">{count > 0 ? count : 0}</div>
        </div>
        
        {/* Toggle Switch */}
        <div className="flex rounded-lg overflow-hidden mb-4 border-2 border-white">
          <button onClick={() => setCount(count - 1)} className="flex-1 cursor-pointer text-white text-3xl bg-blue-800 p-4 flex items-center justify-center">
            −
          </button>
          <button onClick={() => setCount(count + 1)} className="flex-1 text-white text-3xl cursor-pointer bg-blue-400 p-4 flex items-center justify-center">
            +
          </button>
        </div>
        
      </div>
      
      {/* Logo - Bottom Right */}
      {notification && (
      <div className="fixed bottom-4 right-4 animate-bounce">
        <div className="w-full h-12 bg-cyan-400 rounded-lg flex items-center justify-center shadow-lg px-4">
          {notification}
        </div>
      </div>
      )}
    </div>
  )
}

export default App
