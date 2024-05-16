import React from 'react'

export const ListStatus = (props) => {
  return (
    <div className="flex justify-between items-center mt-8 mb-9">
    <p className="text-lg text-teal-800">Your List</p>
    <p className="text-lg bg-teal-800 rounded-3xl px-3 py-1 text-teal-200">
      Done ( 
        <span id="doneCount">{props.tasks.filter((task) =>
          task.isDone === true
        ).length}</span>/
        <span id="totalCount">{props.tasks.length}</span> 
      )
    </p>
  </div>
  )
}

export default ListStatus;