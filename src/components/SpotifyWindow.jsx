import React from "react";
import MacWindow from "./windows/macWindow";
import './SpotifyWindow.scss'

const SpotifyWindow = ({ windowName, windowsState, setWindowsState }) => {
  return (
    <MacWindow windowName={windowName} windowsState={windowsState} setWindowsState={setWindowsState}>
      <div className="spotify-window">
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: "0px" }}
          src="https://open.spotify.com/embed/playlist/1VzKOq14I0NyWV1bFOvUxv?utm_source=generator&theme=0"
          width="100%"
          height="352"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </MacWindow>
  );
};

export default SpotifyWindow;
