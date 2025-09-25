import React, { useEffect, useState } from 'react'
import Project from '../components/Project'
import { Link } from 'react-router-dom'

const ProjectList = () => {

  const [dataProjects, setDataProjects] = useState([])

  useEffect(() =>{
    fetch('/data/projects.json')
      .then((res) => res.json())
      .then((data) => setDataProjects(data))
  },[])

  return (
    <>
        <div className='flex flex-col items-center justify-center gap-28'>
            {dataProjects.map((project) => {
              return <Link className='relative w-full' key={project.id} to={`/project/${project.id}`}><Project color={project.color} name={project.name} image={project.image}/></Link>
            })}
        </div>
    </>
  )
}

export default ProjectList