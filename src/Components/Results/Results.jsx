import React from 'react'

const Results = ({totResult}) => {
  return (
    <div className='Results p-20 rounded-lg'>
        <h3>Monthly Income</h3>
        <div className="expenses">
            <ul>
                <li>housing</li>
                <li>transportation</li>
                <li>savings</li>
            </ul>
            <h3>Monthly Expenses</h3>
        </div>
        <h3>Total: {totResult}</h3>
    </div>
  )
}

export default Results