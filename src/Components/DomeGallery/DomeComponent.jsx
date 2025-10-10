import './DomeGallery';
import './DomeComponent.css'
export default function DomeComponent() {
    return (
        <>
            <h1 className='dome-title'>My Treasure</h1>
            <div className='dome-component-wrapper'>
                    <DomeGallery
                        grayscale={false}
                        overlayBlurColor='transparent'
                        maxVerticalRotationDeg={0}
                        minRadius={800} />
            </div>
        </>

    )
}