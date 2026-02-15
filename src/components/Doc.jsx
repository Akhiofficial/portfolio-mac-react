import React from 'react'
import './dock.scss'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const Doc = ({ windowsState, setWindowsState }) => {
  return (
    <footer className='dock'>
      <div
        onClick={() => {
          setWindowsState(state => ({ ...state, GitHub: true }))
        }}
        className="icon github"><img src="/doc-icons/github.svg" alt="github icon" /></div>
      <div 
      onClick={() => {
        setWindowsState(state => ({ ...state, Note: true }))
      }}
      className="icon note"><img src="/doc-icons/note.svg" alt="note icon" /></div>
      <div 
      onClick={() => {
        setWindowsState(state => ({ ...state, Cli: true }))
      }}
      className="icon cli"><img src="/doc-icons/cli.svg" alt="cli icon" /></div>
      <div 
      onClick={() => {
        window.open('https://www.linkedin.com/in/akhilesh-mandawgane-a1883b283', '_blank')
      }}
      className="icon link"><img src="/doc-icons/link.svg" alt="link icon" /></div>
      <div 
      onClick={() => {
        setWindowsState(state => ({ ...state, SpotifyWindow: true }))
      }}
      className="icon spotify"><img src="/doc-icons/spotify.svg" alt="spotify icon" /></div>
      <div 
      onClick={() => {
        window.open('mailto:akhileshmandawganeofficial@gmail.com', '_blank')
      }}
      className="icon mail"><img src="/doc-icons/mail.svg" alt="mail icon" /></div>
      <div 
      onClick={() => {
       window.open('https://calendar.google.com/calendar/u/0/r', '_blank')
      }}
      className="icon calender"><img src="/doc-icons/calender.svg" alt="calender icon" /></div>
      <div 
      onClick={() => {
        setWindowsState(state => ({ ...state, Resume: true }))
      }}
      className="icon pdf"><img src="/doc-icons/pdf.svg" alt="pdf icon" /></div>



    </footer>
  )
}

export default Doc