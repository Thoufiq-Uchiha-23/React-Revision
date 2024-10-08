import { useState } from "react";

function Products() {
  const [a, b] = useState(false)  

  return (
    <div className='text-white'>
      <div className='text-white w-full h-60 bg-zinc-900'>
        <h4 className={`${a === false ? "text-red-600" : "text-blue-600"}`}>{a === false ? "hello" : "hey"}</h4>
        <button onClick={() => b(!a)}>change</button>
      </div>
    </div>
  )
}
 
export default Products;