import React from 'react'
import { Link } from 'react-router-dom'

const ModuleBtn = ({name,icon,url}) => {
  return (
    <Link to={url} className='flex items-center gap-2 p-2 border border-gray-200 justify-center flex-col hover:bg-gray-200 rounded-md'>
        {icon}{name}
    </Link>
  )
}

export default ModuleBtn