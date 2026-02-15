import React from 'react'
import gitHubData from '../assets/github.json'
import MacWindow from './windows/macWindow'
import './github.scss'

const GitCards = ({
  data = { id: 1, image: '', title: '', description: '', tags: [], repoLink: '', demoLink: '' },
}) => {
  return (
    <div className="card">
      <img src={data.image} alt={data.name} />
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <div className="tags">
        {data.tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
      <div className="links">
        <a href={data.repoLink} target="_blank" rel="noopener noreferrer">Repo</a>
        { data.demoLink && <a href={data.demoLink} target="_blank" rel="noopener noreferrer">Demo</a>}
      </div>
    </div>
  )
}

const GitHub = ({windowName, windowsState, setWindowsState}) => {
  return (
    <MacWindow windowName={windowName} windowsState={windowsState} setWindowsState={setWindowsState}>
      <div className="cards">

       {gitHubData.map((project)=> {
        return <GitCards key={project.id} data={project} />


       })}

      </div>
      
    </MacWindow>
  )
}

export default GitHub
