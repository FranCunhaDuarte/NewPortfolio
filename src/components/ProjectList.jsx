import React from 'react'
import Project from '../components/Project'

const ProjectList = () => {

  const projects = [
    {color: 'red', name: 'luccianos', image: 'luccianos'},
    {color: 'amber', name: 'Portfolio', image: 'portfolio'},
    {color: 'green', name: 'positivus', image: 'positivus'},
    {color: 'gray', name: 'Fendyan S.A.', image: 'fendyansa'},
    {color: 'blue', name: 'Porto Novo', image: 'portonovobarano'},
  ]

  return (
    <>
        <div className='flex flex-col items-center justify-center gap-28'>
            {projects.map((project) => {
              return <Project color={project.color} name={project.name} image={project.image}/>
            })}
        </div>
    </>
  )
}

export default ProjectList