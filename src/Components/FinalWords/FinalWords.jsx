import { useState } from 'react';
import './FinalWords.css';
import together from '../../assets/images/Screenshot_2025-09-14-21-53-14-61.jpg'

function FinalWords() {
    const [open, setOpen] = useState(false);
    return (
        <div className="modal-container">
            <button className="open-btn" onClick={() => setOpen(true)}>
                Final Message 💌
            </button>

            {open && (
                <div className="modal-overlay" onClick={() => setOpen(false)}>
                    {/* Floating Hearts Background */}
                    <div className="hearts">
                        {Array.from({ length: 15 }).map((_, i) => (
                            <span key={i} className="heart">❤️</span>
                        ))}
                    </div>

                    {/* Modal Content */}
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()} // prevent closing on click inside
                    >
                        <h2>On this special day...</h2>
                        <img src={together} />
                        <p>
                            Thank you for always being there for me ❤️. Your presence, your voice 🎵, your smile; even just seeing you fills me with joy. When I think about you, there’s no ‘I’ only ‘we’ because you’ve become someone truly special, someone I want to share my future with.
                        <span style={{ fontWeight: 'bold', color: 'red', padding: '10px', display: 'block', textAlign: 'center' }}>I LOVE YOU❤️</span>
                        </p>
                        <button className="close-btn" onClick={() => setOpen(false)}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
export default FinalWords