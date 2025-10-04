import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Repeat, Repeat1 } from 'lucide-react';

const AudioPlayer = ({ 
  src = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  title = "Audio Track"
}) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
//   const [volume, setVolume] = useState(1);
//   const [isMuted, setIsMuted] = useState(false);
//   const [repeatMode, setRepeatMode] = useState('none'); // 'none', 'all', 'one'
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const setAudioData = () => {
      setDuration(audio.duration);
    };

    const setAudioTime = () => {
      if (!isDragging) {
        setCurrentTime(audio.currentTime);
      }
    };

    // const handleEnded = () => {
    //   if (repeatMode === 'one') {
    //     audio.currentTime = 0;
    //     audio.play();
    //   } else if (repeatMode === 'all') {
    //     audio.currentTime = 0;
    //     audio.play();
    //   } else {
    //     setIsPlaying(false);
    //   }
    // };

    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    // audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
    //   audio.removeEventListener('ended', handleEnded);
    };
  }, [isDragging]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSkipForward = () => {
    const audio = audioRef.current;
    audio.currentTime = Math.min(audio.currentTime + 5, duration);
  };

  const handleSkipBackward = () => {
    const audio = audioRef.current;
    audio.currentTime = Math.max(audio.currentTime - 5, 0);
  };

  const handleProgressChange = (e) => {
    const audio = audioRef.current;
    const newTime = (e.target.value / 100) * duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleProgressMouseDown = () => {
    setIsDragging(true);
  };

  const handleProgressMouseUp = () => {
    setIsDragging(false);
  };

//   const handleVolumeChange = (e) => {
//     const newVolume = e.target.value / 100;
//     setVolume(newVolume);
//     audioRef.current.volume = newVolume;
//     if (newVolume > 0 && isMuted) {
//       setIsMuted(false);
//     }
//   };

//   const toggleMute = () => {
//     const audio = audioRef.current;
//     if (isMuted) {
//       audio.volume = volume;
//       setIsMuted(false);
//     } else {
//       audio.volume = 0;
//       setIsMuted(true);
//     }
//   };

//   const toggleRepeat = () => {
//     if (repeatMode === 'none') {
//       setRepeatMode('all');
//     } else if (repeatMode === 'all') {
//       setRepeatMode('one');
//     } else {
//       setRepeatMode('none');
//     }
//   };

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div style={styles.container}>
      <audio ref={audioRef} src={src} preload="metadata" />
      
      <div style={styles.player}>
        <div style={styles.titleContainer}>
          <h3 style={styles.title}>{title}</h3>
        </div>

        <div style={styles.progressContainer}>
          <span style={styles.time}>{formatTime(currentTime)}</span>
          <div style={styles.progressWrapper}>
            <div style={styles.progressBar}>
              <div 
                style={{
                  ...styles.progressFill,
                  width: `${progressPercentage}%`
                }}
              />
              <input
                type="range"
                min="0"
                max="100"
                value={progressPercentage}
                onChange={handleProgressChange}
                onMouseDown={handleProgressMouseDown}
                onMouseUp={handleProgressMouseUp}
                onTouchStart={handleProgressMouseDown}
                onTouchEnd={handleProgressMouseUp}
                style={styles.progressInput}
              />
            </div>
          </div>
          <span style={styles.time}>{formatTime(duration)}</span>
        </div>

        <div style={styles.controls}>
          <button 
            onClick={handleSkipBackward}
            style={{...styles.controlButton, ...styles.skipButton}}
            aria-label="Skip backward 5 seconds"
          >
            <SkipBack size={24} />
          </button>

          <button 
            onClick={togglePlayPause}
            style={{...styles.controlButton, ...styles.playButton}}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause size={28} /> : <Play size={28} />}
          </button>

          <button 
            onClick={handleSkipForward}
            style={{...styles.controlButton, ...styles.skipButton}}
            aria-label="Skip forward 5 seconds"
          >
            <SkipForward size={24} />
          </button>
        </div>

        {/* <div style={styles.volumeContainer}>
          <button 
            onClick={toggleMute}
            style={{...styles.controlButton, ...styles.smallButton}}
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted || volume === 0 ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
          <input
            type="range"
            min="0"
            max="100"
            value={isMuted ? 0 : volume * 100}
            onChange={handleVolumeChange}
            style={styles.volumeSlider}
            aria-label="Volume"
          />
        </div> */}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // minHeight: 'fitcontent',
    background: 'transparent',
    padding: '20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  player: {
    width: '100%',
    maxWidth: '450px',
    background: 'var(--pink-300)',
    borderRadius: '20px',
    padding: '35px 30px',
    // border: '1px solid #2a2a2a',
  },
  titleContainer: {
    marginBottom: '25px',
    textAlign: 'center',
  },
  title: {
    margin: 0,
    fontFamily: '"Allura", Arial, Helvetica, sans-serif',
    fontSize: '2rem',
    fontWeight: '500',
    color: '#ffffff',
    letterSpacing: '0.3px',
  },
  progressContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '30px',
  },
  time: {
    fontSize: '12px',
    fontWeight: '500',
    color: '#888888',
    minWidth: '40px',
  },
  progressWrapper: {
    flex: 1,
    position: 'relative',
  },
  progressBar: {
    position: 'relative',
    height: '4px',
    background: 'var(--pink-50)',
    borderRadius: '10px',
    overflow: 'hidden',
  },
  progressFill: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    background: 'var(--pink-1300)',
    borderRadius: '10px',
    transition: 'width 0.1s ease',
  },
  progressInput: {
    position: 'absolute',
    top: '50%',
    left: 0,
    transform: 'translateY(-50%)',
    width: '100%',
    height: '20px',
    opacity: 0,
    cursor: 'pointer',
    margin: 0,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '25px',
  },
  controlButton: {
    border: 'none',
    background: 'transparent',
    color: '#ffffff',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s ease',
    outline: 'none',
  },
  playButton: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    background: 'var(--pink-1100)',
  },
  skipButton: {
    width: '45px',
    height: '45px',
    borderRadius: '50%',
    background: 'var(--pink-1000)',
  },
  smallButton: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'var(--pink-1000)',
  },
  activeButton: {
    background: '#667eea',
    color: '#ffffff',
  },
  volumeContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    width: '100%',
  },
  volumeSlider: {
    flex: 1,
    maxWidth: '200px',
    height: '4px',
    borderRadius: '10px',
    background: 'var(--pink-50)',
    outline: 'none',
    cursor: 'pointer',
    appearance: 'none',
    WebkitAppearance: 'none',
  },
};

// Add custom styles for range input thumbs
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  input[type="range"]::-webkit-slider-thumb {
    appearance: none;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: var(--pink-1300);
    cursor: pointer;
  }
  
  input[type="range"]::-moz-range-thumb {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: var(--pink-1300);
    cursor: pointer;
    border: none;
  }
  
  button:hover {
    opacity: 0.8;
  }
  
  button:active {
    transform: scale(0.95);
  }
`;
document.head.appendChild(styleSheet);

export default AudioPlayer;