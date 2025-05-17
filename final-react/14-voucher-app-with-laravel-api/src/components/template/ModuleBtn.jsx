import React from 'react'
import { Link } from 'react-router-dom'

const ModuleBtn = ({name,icon,url}) => {
  return (
    <Link to={url} className="flex w-full h-[300px] flex-col items-center justify-center md:w-[350px] bg-background border border-border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        {icon}
        <br />
        {name}
    </Link>
  )
}

export default ModuleBtn