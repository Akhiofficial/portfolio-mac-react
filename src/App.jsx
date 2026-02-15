import { useState } from 'react'
import './app.scss'
import Doc from './components/Doc'
import Nav from './components/Nav'
import GitHub from './components/GitHub'
import Note from './components/note'
import Resume from './components/Resume'
import SpotifyWindow from './components/SpotifyWindow'
import Cli from './components/Cli'

const App = () => {

  const [windowsState, setWindowsState] = useState({
    GitHub: false,
    Note: false,
    Resume: false,
    SpotifyWindow: false,
    Cli: false,
  })

  return (
    <main>
      <Nav />
      <Doc windowsState={windowsState} setWindowsState={setWindowsState} />
      {windowsState.GitHub && <GitHub windowName="GitHub" windowsState={windowsState} setWindowsState={setWindowsState} />}
      {windowsState.Note && <Note windowName="Note" windowsState={windowsState} setWindowsState={setWindowsState} />}
      {windowsState.Resume && <Resume windowName="Resume" windowsState={windowsState} setWindowsState={setWindowsState} />}
      {windowsState.SpotifyWindow && <SpotifyWindow windowName="SpotifyWindow" windowsState={windowsState} setWindowsState={setWindowsState} />}
      {windowsState.Cli && <Cli windowName="Cli" windowsState={windowsState} setWindowsState={setWindowsState} />}
    </main>
  )
}

export default App
