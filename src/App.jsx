import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Results from './Components/Results/Results'
import Form from './Components/Form/Form'

function App() {
  const [count, setCount] = useState(0)

  const [salary,setSalary] = useState("")
  const [extraSalary,setExtraSalary] = useState("")

  const [totResult,setTotResult] = useState("")  

  return (
    <>
      <div>
        <h1 className="p-5 rounded-lg  bg-violet-800 font-bold text-lg">r-budget-calculator</h1>
        <div className="main-container p-20 flex-wrap">
          <Results
            salary={salary}
            setSalary={setSalary}
            extraSalary={extraSalary} 
            setExtraSalary={setExtraSalary} 
            totResult={totResult}
            setTotResult={setTotResult}
          />
          <Form 
            salary={salary}
            setSalary={setSalary}
            extraSalary={extraSalary}
            setExtraSalary={setExtraSalary}
            setTotResult={setTotResult}
          />
        </div>
        <p>Developed by Ricky A</p>
      </div>  

    </>
  )
}

export default App
