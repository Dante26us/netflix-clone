import React from 'react';
import ReactPlayer from 'react-player'

function Player(props) {
    return (
        <div className='player-wrapper'>
        {console.log(props.location.state)}
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=mnd7sFt5c3A'
          width='100%'
          playing={true}
          height='100%'
        />
      </div>
    );
}


export default Player;