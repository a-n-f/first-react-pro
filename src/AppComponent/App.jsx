import { useEffect, useInsertionEffect, useLayoutEffect, useState } from "react"

const App = () => {
  console.log("App Component");
  
  const [color, setColor] = useState("blue")

  useEffect(() => {
      console.log(` useEffect اجرا شد `);
      setColor("red")
  }, [])

  // قبل از رندر صفحه اعمال میشود
  // useLayoutEffect(() => {
    //   console.log(` useEffect اجرا شد `);
  //   setColor("red")
  // }, [])

  // قبل از اعمال تمام استایل های صفحه، اجرا میشود
  // useInsertionEffect(() => {
  //   console.log(` useEffect اجرا شد `);
  //   setColor("gray")
  // })


  return (
    <div className={`bg-gray-500 text-white flex justify-center w-auto m-5 p-10 rounded-2xl text-center text-3xl font-bold`}
    style={{backgroundColor:color,}}>
      <h1>Hey</h1>
    </div>
  )
}

export default App
