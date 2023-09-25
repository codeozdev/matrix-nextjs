'use client'

import { useState, useRef } from 'react'
import { AiOutlinePauseCircle, AiOutlinePlayCircle } from 'react-icons/ai'

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)

  const audioRef = useRef(null)

  const toggleAudio = () => {
    const audio = audioRef.current
    if (isPlaying) {
      audio.pause()
    } else {
      audio.currentTime = currentTime
      audio
        .play()
        .then(() => {
          setIsPlaying(true)
        })
        .catch((error) => {
          console.error('Müzik çalarken bir hata oluştu: ', error)
        })
    }
  }

  const stopAudio = () => {
    const audio = audioRef.current
    audio.pause()
    setCurrentTime(audio.currentTime)
    setIsPlaying(false)
  }

  return (
    <div>
      <audio ref={audioRef} src='/music/music.mp3' />
      {isPlaying ? (
        <button onClick={stopAudio}>
          <AiOutlinePauseCircle size={30} />
        </button>
      ) : (
        <button onClick={toggleAudio}>
          <AiOutlinePlayCircle size={30} />
        </button>
      )}
    </div>
  )
}

export default MusicPlayer
