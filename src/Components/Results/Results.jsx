import React from 'react'

const Results = ({totResult}) => {
  return (
    <div className='Results p-20 rounded-lg'>
        <h2>Monthly Income</h2>
        <div className="expenses">
            <ul className=" bg-zinc-800 flex-col rounded-lg p-5">
                <li>housing</li>
                <li>transportation</li>
                <li>savings</li>
            </ul>
            <h2 className="p-2">Monthly Expenses</h2>
        </div>
        <div className="Total mt-8">
          <h2>Total:</h2>
          <h1 className='ml-2'>£{totResult}</h1>
        </div>
        
    </div>
  )
}

export default Results;