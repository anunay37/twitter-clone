import React, {useState} from 'react';
import './TweetBox.css';
import { Avatar, Button} from '@mui/material';
import db from './firebase';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const sendTweet = e => {
    e.preventDefault();
    db.collection('posts').add({
      displayName: 'Anunay Raj',
      username: 'anunay18',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        'https://pbs.twimg.com/profile_images/1688303597933731840/AkbDX4jh_400x400.jpg'
    });

    setTweetMessage('');
    setTweetImage('');
  }

  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox__input'>
                <Avatar src='https://pbs.twimg.com/profile_images/1688303597933731840/AkbDX4jh_400x400.jpg'></Avatar>
                <input 
                onChange={(e) => setTweetMessage(e.target.value)}
                value={tweetMessage} 
                placeholder="What's happening?"
                type='text'
                />
            </div>
            <input 
            value={tweetImage}
            onChange={(e) => setTweetImage(e.target.value)}
            className='tweetBox__imageInput' 
            placeholder="Enter image URL" 
            type="text">
            </input>
            <Button onClick={sendTweet} type='submit' className='tweetBox__tweetButton'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox
