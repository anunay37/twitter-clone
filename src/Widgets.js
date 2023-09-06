import React from 'react';
import './Widgets.css';
import { Search } from '@mui/icons-material';
import { TwitterTweetEmbed, TwitterTimelineEmbed, TwitterShareButton} from 'react-twitter-embed';

function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets_input'>
      <Search className='widgets_searchIcon' /> 
      <input placeholder='Search Twitter' type='text' /> 
      </div>
      <div className='widgets_widgetContainer'>
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId='1697472113119211537' />
        <TwitterTimelineEmbed 
        sourceType='profile'
        screenName='anunay18'
        options={{height: 400}}
        />
        <TwitterShareButton 
        url = {'https://www.facebook.com/anunay.raj.18/'}
        options={{text: '#reactjs is awesome', via: 'anunay18'}}
        />
      </div>
    </div>
  )
}

export default Widgets
