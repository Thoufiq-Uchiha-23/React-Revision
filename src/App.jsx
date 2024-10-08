// import { useState } from "react"
import Products from "./Products"

function App() {
  // const [a, b] = useState(69)

  return (
    <div className="bg-zinc-900 text-white w-full h-screen p-5">
      <Products age={25} data={{age: 22, name: "Thoufiq"}} />
    </div>
  )
}

export default App
