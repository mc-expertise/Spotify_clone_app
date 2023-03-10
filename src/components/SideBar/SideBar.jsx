import React from 'react';
import SideBarOptions from '../SideBarOptions/SideBarOptions';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import './SideBar.css';
import { useStateValue } from '../../StateProvider';
const SideBar = () => {
  const [{ playlists }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
        className="sidebar__logo"
      />
      <SideBarOptions Icon={HomeIcon} title="Home" />
      <SideBarOptions Icon={SearchIcon} title="Search" />
      <SideBarOptions Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map((playlist) => (
        <SideBarOptions title={playlist.name} />
      ))}
    </div>
  );
};

export default SideBar;
