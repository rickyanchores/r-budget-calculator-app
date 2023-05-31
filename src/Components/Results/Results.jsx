import React from 'react'

const Results = ({totResult}) => {

  const need50 = Math.round(totResult / 100 *50)
  const want30 = Math.round(totResult / 100 *30)
  const save20 = Math.round(totResult / 100 *20)

  return (
    <div className='Results p-20 rounded-lg'>
        
        <div className="expenses">
          <h2>Expenses</h2>
            <ul className=" bg-zinc-800 flex-col rounded-lg p-5">
                <li>housing</li>
                <li>transportation</li>
                <li>savings</li>
            </ul>
            <h2>Monthly Expense: </h2>
        </div>
        <div className="budget101 bg-slate-600 p-3 mt-1 rounded-lg">
          <h3>Budget 101</h3>
          <p>50/30/20 Ideal</p>
          <ul className='mt-2'>
            <li>
              <h3>Needs 50%</h3>
              <div className="needs">£ {need50}</div>
            </li>
            <li>
              <h3>Wants 30%</h3>
              <div className="wants">£ {want30}</div>
            </li>
            <li>
              <h3>Savings 20%</h3>
              <div className="wants">£ {save20}</div>
            </li>
          </ul>
        </div>
        <div className="Total mt-8">
          <h2>Total Income:</h2>
          <h1 className='ml-2'>£{totResult}</h1>
        </div>
        
    </div>
  )
}

export default Results;