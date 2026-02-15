import { useState, useEffect } from 'react'
import './Note.scss'
import Markdown from 'react-markdown'
import MacWindow from './windows/macWindow'
import { stackoverflowDark, docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import SyntaxHighlighter from 'react-syntax-highlighter';


const Note = ({ windowName, windowsState, setWindowsState }) => {
  const [markdown, setMarkdown] = useState(null)

  useEffect(() => {
    fetch("./note.txt")
      .then(res => res.text())
      .then(text => setMarkdown(text)

      )
  }, [])

  return (
    <MacWindow windowName={windowName} windowsState={windowsState} setWindowsState={setWindowsState}>
      <div className="note-window">
        {markdown ? <SyntaxHighlighter language='typescript' style={stackoverflowDark}>{markdown}</SyntaxHighlighter> : <p> Loading....</p>}
      </div>
    </MacWindow>
  )
}


export default Note