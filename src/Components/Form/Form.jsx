import React from 'react'

const Form = ({salary,setSalary,extraSalary,setExtraSalary}) => {

    //EVENT Handlers

    const inputSalary = (e) => {
        console.log(e.target.value)
        setSalary(e.target.value)
    }
    const inputExtraSalary = (e) => {
        console.log(e.target.value)
        setExtraSalary(e.target.value)
    }

    const next = (e) => {
        e.preventDefault(e)
        console.log("Next")
    }


  return (
    <form className='Form p-20 flex-col'>
        <input value={salary} type="text" className="inputSalary p-5 mt-2" placeholder='Monthly salary' onChange={inputSalary}/>
        <input value={extraSalary} type="text" className="extraSalary p-5 mt-2" placeholder='Extra salary' onChange={inputExtraSalary}/>
        <button className="next mt-2" onClick={next}>Next</button>
    </form>
  )
}

export default Form