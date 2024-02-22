import React, { useRef } from "react";
import "./Styles.css"; // Import the CSS file

const Nav = ({ playlistStatus, setPlaylistStatus, setSongs }) => {
    const fileInputRef = useRef(null);

    const handleFileUpload = () => {
        const file = fileInputRef.current.files[0];
        if (file) {
            const newSong = {
                name: file.name.replace(/\.[^/.]+$/, ""),
                cover: "", // You can add a default cover image or prompt the user to upload one
                artist: "Unknown Artist",
                audio: URL.createObjectURL(file),
                color: ["#000000", "#ffffff"], // You can generate random colors or set default colors
                id: Math.random().toString(36).substr(2, 9), // Generate a unique ID
                active: false,
            };
            setSongs((prevSongs) => [...prevSongs, newSong]);
        }
    };

    return (
        <div className="nav-container">
            <div className="left-section">
                <h1 className={playlistStatus ? "h1-mobile" : "h1"}>IOTReady Audio Player</h1>
            </div>
            <div className="right-section">
                <button className="button" onClick={() => setPlaylistStatus(!playlistStatus)}>
                    Playlist
                </button>
                    <input
                        ref={fileInputRef}
                        className="file-input"
                        type="file"
                        accept=".mp3"
                        onChange={handleFileUpload}
                        style={{ display: "none" }} // Hide the file input
                    />
                <button className="button" onClick={() => fileInputRef.current.click()}>
                    Add Song
                </button>
            </div>
        </div>
    );
};

export default Nav;
