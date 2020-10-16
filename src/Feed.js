import React from 'react'
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />
            {/* MessageSender */}
            <Post 
                profilePic="https://scontent.fsdv1-2.fna.fbcdn.net/v/t1.0-9/10986997_10153293908245789_6919242855980160336_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=zRovnGkdimAAX990eE_&_nc_ht=scontent.fsdv1-2.fna&oh=7a2489a39f3ef45e8d694e8f832e1136&oe=5FAC6F22"
                message='Wow this works!'
                timestamp="this is a timestamp"
                username="Noy Mashat"
                image="https://miro.medium.com/max/1000/0*kBHpKva09AsGj7RQ"
            />
            <Post 
                profilePic="https://scontent.fsdv1-2.fna.fbcdn.net/v/t1.0-9/10986997_10153293908245789_6919242855980160336_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=zRovnGkdimAAX990eE_&_nc_ht=scontent.fsdv1-2.fna&oh=7a2489a39f3ef45e8d694e8f832e1136&oe=5FAC6F22"
                message='Wow this works!'
                timestamp="this is a timestamp"
                username="Noy Mashat"
            />
            <Post />
        </div>
    )
}

export default Feed
