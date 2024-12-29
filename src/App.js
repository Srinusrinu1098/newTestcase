import {useState} from 'react'
import {FaSearch} from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'
import styled from 'styled-components'
import './App.css'

const initialTracksList = [
  {
    id: '3b22e3fd-3d12-4ad1-9e38-90314219c4f4',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-perfect-img.png',
    name: 'Perfect',
    genre: 'Pop',
    duration: '4:04',
  },
  {
    id: '40f97965-ff45-469e-a635-b2ef9f1642ed',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-shape-of-you-img.png',
    name: 'Shape of You',
    genre: 'Divide',
    duration: '4:24',
  },
  {
    id: '782f916b-4056-44ec-a95f-5115c3f84904',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-visiting-hours.png',
    name: 'Visiting Hours',
    genre: 'Folk-Pop',
    duration: '3:49',
  },
  {
    id: 'fcf0dc77-3427-457c-9ee0-91b1dc39fece',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-shivers-img.png',
    name: 'Shivers',
    genre: 'Dance-Pop',
    duration: '3:58',
  },
  {
    id: '9c1bb890-d4d5-4edf-9d95-6959d716b442',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-bad-habits-img.png',
    name: 'Bad Habits',
    genre: 'Dance-Pop',
    duration: '4:01',
  },
  {
    id: '2216db9c-647f-4814-b880-179740e4d748',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-castle-on-the-hill-img.png',
    name: 'Castle on the Hill',
    genre: 'Pop&Rock',
    duration: '4:48',
  },
  {
    id: 'a5e30966-b760-4660-bf08-073135f7d010',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-happier-img.png',
    name: 'Happier',
    genre: 'Pop',
    duration: '3:36',
  },
  {
    id: '2d5c9bc0-b8b0-41c6-aa55-cb3b659d8604',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-photograph-img.png',
    name: 'Photograph',
    genre: 'Folk music',
    duration: '4:26',
  },
  {
    id: 'efd3d621-2c05-4941-acdc-0a1a0786bc53',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-galway-girl-img.png',
    name: 'Galway Girl',
    genre: 'Pop',
    duration: '3:20',
  },
  {
    id: 'e4b8e3b8-7776-4c09-8abc-ba328a8babe9',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-i-dont-care-img.png',
    name: "I Don't Care",
    genre: 'Pop',
    duration: '3:38',
  },
]

const Background = styled.div`
  height: 60vh;
  width: 100vw;
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
  padding-left: 94px;
  justify-content: flex-end;
`

const Title = styled.h1`
  color: #ffffff;
  margin: 0px;
`

const Subtitle = styled.p`
  color: #ffffff;
  margin: 0px;
  padding-bottom: 24px;
  font-size: 24px;
`

const PlaylistContainer = styled.div`
  background-color: #152850;
  width: 100vw;
  padding: 16px;
  min-height: 100vh;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

const PlaylistTitle = styled.h1`
  color: #ffffff;
  font-size: 24px;
`

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ffffff;
  padding-right: 14px;
  height: 30px;
  border-radius: 4px;
`

const SearchInput = styled.input`
  background: transparent;
  border: none;
  padding-left: 14px;
  outline: none;
  color: #ffffff;
`

const TrackList = styled.ul`
  list-style: none;
  padding: 0;
`

const TrackItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  margin-bottom: 8px;
  padding: 8px;
  border-radius: 8px;
`

const TrackDetails = styled.div`
  display: flex;
  align-items: center;
`

const TrackImage = styled.img`
  width: 50px;
  border-radius: 4px;
`

const TrackInfo = styled.div`
  flex-grow: 1;
  margin-left: 12px;
`

const TrackName = styled.p`
  margin: 0;
  font-size: 18px;
`

const TrackGenre = styled.p`
  margin: 0;
  font-size: 14px;
  color: #94a3b8;
`

const TrackActions = styled.div`
  display: flex;
  align-items: center;
`

const TrackDuration = styled.p`
  margin: 0 12px;
  font-size: 14px;
`

const DeleteButton = styled.button`
  background: transparent;
  border: none;
  color: #ffffff;
  font-size: 14px;
  padding: 4px 8px;
  cursor: pointer;
`

const NoSongs = styled.p`
  color: #ffffff;
  text-align: center;
`

const App = () => {
  const [tracksList, setTracksList] = useState(initialTracksList)
  const [searchInput, setSearchInput] = useState('')

  const deleteTrack = id => {
    const updatedTracks = tracksList.filter(track => track.id !== id)
    setTracksList(updatedTracks)
  }

  const filteredTracks = tracksList.filter(track =>
    track.name.toLowerCase().includes(searchInput.toLowerCase()),
  )

  return (
    <div>
      <Background>
        <Title>Ed Sheeran</Title>
        <Subtitle>Singer</Subtitle>
      </Background>

      <PlaylistContainer>
        <Header>
          <PlaylistTitle>Songs Playlist</PlaylistTitle>

          <SearchBox>
            <SearchInput
              type="text"
              placeholder="Search"
              value={searchInput}
              onChange={e => setSearchInput(e.target.value)}
            />
            <FaSearch style={{color: '#ffffff'}} />
          </SearchBox>
        </Header>

        {filteredTracks.length > 0 ? (
          <TrackList>
            {filteredTracks.map(track => (
              <TrackItem key={track.id}>
                <TrackDetails>
                  <TrackImage src={track.imageUrl} alt="track" />
                  <TrackInfo>
                    <TrackName>{track.name}</TrackName>
                    <TrackGenre>{track.genre}</TrackGenre>
                  </TrackInfo>
                </TrackDetails>
                <TrackActions>
                  <TrackDuration>{track.duration}</TrackDuration>
                  <DeleteButton
                    onClick={() => deleteTrack(track.id)}
                    data-testid="delete"
                  >
                    <MdDelete />
                  </DeleteButton>
                </TrackActions>
              </TrackItem>
            ))}
          </TrackList>
        ) : (
          <NoSongs>No Songs Found</NoSongs>
        )}
      </PlaylistContainer>
    </div>
  )
}

export default App
