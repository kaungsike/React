import React from 'react'

export const ListStatus = () => {
  return (
    <div className="flex justify-between items-center mt-8 mb-9">
    <p className="text-lg text-teal-800">Your List</p>
    <p className="text-lg bg-teal-800 rounded-3xl px-3 py-1 text-teal-200">
      Done ( <span id="doneCount">0</span> / <span id="totalCount">0</span>{" "}
      )
    </p>
  </div>
  )
}

export default ListStatus;