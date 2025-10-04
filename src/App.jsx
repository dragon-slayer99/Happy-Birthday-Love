import './App.css'
import HeroSection from './Components/HeroSection/HeroSection';
import TextCursor from './Components/Cursor/TextCursor';
import DomeGallery from './Components/DomeGallery/DomeGallery';
// import WordsFromHeart from './Components/WordsFromHeart/Accordian/WordsFromHeart';
import FinalWords from './Components/FinalWords/FinalWords';
import LoveQuotes from './Components/WordsFromHeart/MyLoveForYou/LoveQuotes';
import Demo from './Components/WishingAudio/AudioPlayer';
import AUDIO from '/Audios/Recording.m4a'
import Accordian from './Components/WordsFromHeart/Accordian/Accordian';
import EmojiTrailCursor from './Components/ExpCursor/EmojiTrailCursor';
import Letter from './Components/WordsFromHeart/Letter/Letter';

import Footer from './Components/Footer/Footer';

function App() {

  return (
    <>
      {/* <TextCursor
        emoji="❤️" 
        count={20} 
        size={28}
        hideNative={false}
      /> */}
      <HeroSection />        
      <h1 className='dome-title'>My Treasure</h1>
      <div className='dome-component-wrapper'>

        <DomeGallery 
          grayscale={false} 
          overlayBlurColor='transparent' 
          maxVerticalRotationDeg={0} 
          minRadius={800}/>
      </div>
      <Letter/>
      <LoveQuotes/>
      <Accordian/>

      <Demo title='Birthday wishes' src={AUDIO} />
      <FinalWords/>
      <Footer/>


    </>
  )
}

export default App;
