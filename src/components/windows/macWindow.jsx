import React from 'react'
import { Rnd } from 'react-rnd'
import './window.scss'

const MacWindow = ({width="35vw", height="60vh", children, windowName, setWindowsState}) => {
  return (
    <Rnd
    default={{
        width,
        height,
        x: 300,
        y: 200
    }}
    >
        <div className="window">
            <div className="nav">
                <div className="dots">
                    <div onClick={() => setWindowsState(state => ({ ...state, [windowName]: false }))} className="dot red"></div>
                    <div className="dot yellow"></div>
                    <div className="dot green"></div>
                </div>

                <div className="title">
                    <p>akhilesh ~ zsh</p>
                </div>
            </div>
            <div className="main-content">
                {children}
            </div>
        </div>
    </Rnd>
  )
}

export default MacWindow