import { memo } from "react";

const ChildeComponent = () => {
    console.log("ChildeComponent");
    
    return(
        <header className="mt-10 mb-14">
            <h1 className="text-4xl md:text-5xl font-extrabold text-purple-700 tracking-wide drop-shadow-lg">
            شمارنده&nbsp;بسیـــار&nbsp;زیبا 🚀
            </h1>
            <div className="mt-2 text-lg text-purple-400 text-center font-medium tracking-wider">Tailwind CSS</div>
        </header>
        
    )
}

export default memo(ChildeComponent) ;