import React from "react";
import './Sidebar.css';
import TwitterIcon from 
'@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BarOption from "./BarOption";
import { Button } from "@mui/material";

function Sidebar(){
   return(
    <div className="sidebar">
        <TwitterIcon className="sidebar__twitterIcon"/>
        <BarOption active Icon={HomeIcon} text= "Home"/>
        <BarOption Icon={SearchIcon} text= "Explore"/>
        <BarOption Icon={NotificationsIcon} text= "Notification"/>
        <BarOption Icon={MailOutlineIcon} text= "Messages"/>
        <BarOption Icon={BookmarkBorderIcon} text= "Bookmarks"/>
        <BarOption Icon={ListAltIcon} text= "Lists"/>
        <BarOption Icon={PermIdentityIcon} text= "Profile"/>
        <BarOption Icon={MoreHorizIcon} text= "More"/>

        <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
    </div>
   ); 
}

export default Sidebar;