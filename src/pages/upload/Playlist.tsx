import React, { useEffect } from "react";
import UploadPlaylistComponent from "../../components/UploadPlaylistComponent";

const UploadPlaylist: React.FC = () => {
  useEffect(() => {
    document.title = "SoundScape - Upload Playlist";
  }, []);

  return <UploadPlaylistComponent />
};

export default UploadPlaylist;
