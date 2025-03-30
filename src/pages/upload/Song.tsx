import React, { useEffect } from "react";
import UploadSongComponent from "../../components/UploadSongComponent";

const UploadSong: React.FC = () => {
  useEffect(() => {
    document.title = "SoundScape - Upload Playlist";
  }, []);

  return <UploadSongComponent />
};

export default UploadSong;

