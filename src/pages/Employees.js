import React from 'react'
import "../styling/employees.css";

export default function Employees() {
  return (
    <div className='employees' >
      <div className="firstRow">
        <button className='addEmployee' >Add Employee</button>
        <input type="search" />
      </div>
    </div>
  )
}
