const CounterComponent = ({number ,setNumber}) => {
    console.log("CounterComponent");

    return(
        <main className="flex flex-1 justify-center items-center w-full">
            <div className="bg-white/90 shadow-xl rounded-xl p-8 flex flex-col items-center w-80">
                <div className="text-6xl font-bold text-blue-600 mb-6 transition-all duration-150">
                    {number}
                </div>
                <button onClick={() => setNumber(prev => prev + 1)} className="mt-2 px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-400 text-white font-semibold rounded-lg shadow-md hover:scale-105 active:scale-95 transition-all duration-150">
                    افزایش
                </button>
            </div>
      </main>
    )
}

export default CounterComponent ;