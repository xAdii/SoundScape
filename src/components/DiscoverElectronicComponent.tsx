import { Container, Table } from "react-bootstrap";
import { useEffect, useState } from "react";

const DiscoverElectronicComponent = () => {
  const [songs, setSongs] = useState<any[]>([]);

  useEffect(() => {
    const fetchSongs = async () => {
      const response = await fetch(`http://localhost:5000/songs/genre/electronic`);
      const data = await response.json();
      setSongs(data.songs || []);
    };

    fetchSongs();
  });

  return (
    <Container className="my-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Artist</th>
            <th>Length</th>
          </tr>
        </thead>
        <tbody>
          {songs.length === 0 ? (
            <tr>
              <td colSpan={4} className="text-center">
                There are no Songs to display.
              </td>
            </tr>
          ) : (
            songs.map((song, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{song.title}</td>
                <td>{song.artist}</td>
                <td>{song.length}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default DiscoverElectronicComponent;
