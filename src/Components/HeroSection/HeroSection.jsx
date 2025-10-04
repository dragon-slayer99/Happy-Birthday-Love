import './HeroSection.css';
import Button from './Button/Button';


function HeroSection() {
    return (
        <section>
            <div className="herosection-wrapper">
                <div className="herosection-container">
                    <div className="herosection-content">
                        <h1>Happy Birthday</h1>
                        <h3>My Beautiful</h3>
                        {/* <p>Today marks another year of your incredible existence,can't thank your parents enough for giving birth to such an amazingly kind & cute person.</p> */}
                        {/* <p>On this special day, I want you to know how much you mean to me and how grateful I am to have you in my life.</p> */}
                        <p>On this special day, I want you to know just how much you mean to me. You’ve brought so much happiness, warmth, and joy into my life, and Having you by my side is one of the greatest gift I could ever ask for.</p>
                    </div>
                    <Button text={"Love Letter"} />
                </div>
            </div>
        </section>
    )
}
export default HeroSection;