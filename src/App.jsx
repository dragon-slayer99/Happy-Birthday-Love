import './App.css'
import HeroSection from './Components/HeroSection/HeroSection';
import TextCursor from './Components/Cursor/TextCursor';
import DomeGallery from './Components/DomeGallery/DomeGallery';
// import WordsFromHeart from './Components/WordsFromHeart/Accordian/WordsFromHeart';
import Accordian from './Components/WordsFromHeart/Accordian02/Accordian';
import EmojiTrailCursor from './Components/ExpCursor/EmojiTrailCursor';

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
      <div style={{ width: '100%', height: '100vh'}}>
        <DomeGallery 
          grayscale={false} 
          overlayBlurColor='transparent' 
          maxVerticalRotationDeg={0} 
          minRadius={800}/>
      </div>
      <Accordian/>
      {/* <EmojiTrailCursor
        emoji={"❤️"}
        count={20}
        size={24}
        lerpFactor={0.18}
        spread={10}
        hideNative={true} /> */}
    </>
  )
}

export default App
