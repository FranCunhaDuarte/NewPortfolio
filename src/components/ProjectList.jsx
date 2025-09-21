import React from 'react'
import Project from '../components/Project'

const ProjectList = () => {
  return (
    <>
        <div className='flex flex-col items-center justify-center gap-28'>
            <Project color='red' name="lucciano's" image='luccianos'/>
            <Project color='amber' name='Portfolio' image='portfolio'/>
            <Project color='green' name='Positivus' image='positivus'/>
            <Project color='gray' name='FendyanS.A.' image='fendyansa'/>
            <Project color='blue' name='Porto Novo' image='portonovobarano'/>
        </div>
    </>
  )
}

export default ProjectList