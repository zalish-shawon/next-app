'use client'

import { useState } from "react";

export default function Home() {

  const [count, setCount] = useState(0);

  const handleClick1 = () => {

    setCount(count + 1);

  }
  const handleClick2 = () => {

    setCount(count - 1);
  }

return (
    <div className="text-center mt-10">

      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Welcome to Count App!</h1>
      
      <div>
        <h2 className="mt-5 text-2xl">Count: {count}</h2>

        <div className="flex gap-3 justify-center mt-5">
            <button className="bg-white text-black px-6 py-2 rounded-lg hover:bg-slate-600 hover:text-white" onClick={handleClick1} >Increase (+)</button>
            <button className="bg-white text-black px-6 py-2 rounded-lg hover:bg-slate-600 hover:text-white" onClick={handleClick2}>Decrease (-)</button>
        </div>
      </div>
    
    </div>
  );
}
