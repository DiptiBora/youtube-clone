import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCalIcon from '@material-ui/icons/VideoCall'; 
import AppsIcon from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar';
import NotificationIcon from '@material-ui/icons/Notifications';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    const [inputSearch,setInputSearch] = useState('');

    return (
        <div className="header">
            <div className="header_left">
                <MenuIcon/>
                <Link to="/">
                    <img className="header_logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSXN578Nc7ZLiZuPc8d-6exm7onu4U1HyAeQ&usqp=CAU" alt="YouTube"/>
                </Link>
            </div>
            
            <div className="header_input">
                <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} type="text" placeholder="Search"/>
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header_inputButton"/>
                </Link>
            </div>

            <div className="header_icons">
                <VideoCalIcon className="header_icon"/>
                <AppsIcon className="header_icon"/>
                <NotificationIcon className="header_icon"/>
                <Avatar alt="Avatar image" src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png"/>
            </div>
        </div>
    )
}

export default Header
