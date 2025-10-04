import { useState } from 'react';
import './FinalWords.css';

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
                        <img src="/src/assets/images/Screenshot_2025-09-14-21-53-14-61_a63b0f8076346d26cbdc1b971a1da2a7.jpg" alt="picture of us together" />
                        <p>
                            Thank you for always being there for me ❤️. Your presence, your voice 🎵, your smile; even just seeing you fills me with joy. When I think about you, there’s no ‘I’ only ‘we’ because you’ve become someone truly special, someone I want to share my future with.
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