import './App.css'
import { Suspense, lazy } from 'react'
import AUDIO from '/Audios/wishesAudio.mp3'

const HeroSection = lazy(() => import('./Components/HeroSection/HeroSection'))
const TextCursor = lazy(() => import('./Components/Cursor/TextCursor'))
const DomeGallery = lazy(() => import('./Components/DomeGallery/DomeGallery'))
// const WordsFromHeart = lazy(() => import('./Components/WordsFromHeart/Accordian/WordsFromHeart'))
const FinalWords = lazy(() => import('./Components/FinalWords/FinalWords'))
const LoveQuotes = lazy(() => import('./Components/WordsFromHeart/MyLoveForYou/LoveQuotes'))
const Demo = lazy(() => import('./Components/WishingAudio/AudioPlayer'))
const Accordian = lazy(() => import('./Components/WordsFromHeart/Accordian/Accordian'))
const EmojiTrailCursor = lazy(() => import('./Components/ExpCursor/EmojiTrailCursor'))
const Letter = lazy(() => import('./Components/WordsFromHeart/Letter/Letter'))
const Footer = lazy(() => import('./Components/Footer/Footer'))

function App() {

  return (
    <>
      <Suspense fallback={null}>
        {/* <TextCursor
          emoji="❤️" 
          count={20} 
          size={28}
          hideNative={false}
        /> */}
      </Suspense>
      <Suspense fallback={null}>
        <HeroSection />
      </Suspense>
      <h1 className='dome-title'>My Treasure</h1>
      <div className='dome-component-wrapper'>
        <Suspense fallback={null}>
          <DomeGallery
            grayscale={false}
            overlayBlurColor='transparent'
            maxVerticalRotationDeg={0}
            minRadius={800} />
        </Suspense>
      </div>
      <Suspense fallback={null}>
        <Letter />
      </Suspense>
      <Suspense fallback={null}>
        <LoveQuotes />
      </Suspense>
      <Suspense fallback={null}>
        <Accordian />
      </Suspense>

      <Suspense fallback={null}>
        <Demo title='Birthday wishes' src={AUDIO} />
      </Suspense>
      <Suspense fallback={null}>
        <FinalWords />
      </Suspense>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>


    </>
  )
}

export default App;
