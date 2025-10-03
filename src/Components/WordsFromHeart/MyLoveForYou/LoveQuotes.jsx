import React from 'react';
import './LoveQuotes.css';

const quotes = [

    {
        quote: "I don’t believe in fate… but I’m pretty sure I was supposed to meet you.",
        emoji: "💖"
    },
    {
        quote: "It’s strange, but even when we don’t talk, you’re still on my mind.",
        emoji: "💗"
    },
    {
        quote: "Being around you feels like finding my favorite song on repeat.",
        emoji: "💕"
    },
    {
        quote: "just hearing you’re name is enough to light up my mood.",
        emoji: "💘"
    },
    {
        quote: "I want to be the reason you smile, just like you’re the reason behind mine.",
        emoji: "❤️"
    },
];

const QuotesCard = ({ loveQuotes = [] }) => {
    return (
        <div className="love-quotes-section">
            <h1 className="love-quotes-title">Words from My Heart</h1>
            <div className="quotes-grid">
                {loveQuotes.map((quote, index) => (
                    <div key={index} className="quote-card">
                        <div className="quote-content">
                            <div className="quote-emoji">{quote.emoji}</div>
                            <p className="quote-text">"{quote.quote}"</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


function LoveQuotes() {
    return (
        <div style={{ maxWidth: "1200px", margin: "2rem auto" }}>
            <QuotesCard loveQuotes={quotes} />
        </div>
    );
}


export default LoveQuotes;