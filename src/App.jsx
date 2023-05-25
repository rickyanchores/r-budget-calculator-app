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
  const [totSalary,setTotSalary] = useState("")

  return (
    <>
      <div>
        <h1 className="bg-slate-900 p-5 rounded-lg">r-budget-calculator</h1>
        <div className="main-container p-20">
          <Results salary={salary} setSalary={setSalary} extraSalary={extraSalary} setExtraSalary={setExtraSalary} totSalary={totSalary} setTotSalary={setTotSalary}/>
          <Form salary={salary} setSalary={setSalary} extraSalary={extraSalary} setExtraSalary={setExtraSalary} totSalary={totSalary} setTotSalary={setTotSalary}/>
        </div>
        <p>Developed by Ricky A</p>
      </div>  

    </>
  )
}

export default App
