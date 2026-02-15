import React from 'react'
import './Resume.scss'
import MacWindow from './windows/macWindow'

const Resume = ({ windowName, windowsState, setWindowsState }) => {
  return (
    <MacWindow windowName={windowName} windowsState={windowsState} setWindowsState={setWindowsState}>
      <div className="resume-window">
        <iframe src="./resume.pdf" frameborder="0"></iframe>
      </div>

    </MacWindow>

  )
}

export default Resume