import React from 'react';
import { motion } from 'framer-motion';
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
        quote: "Just hearing you’re name is enough to light up my mood.",
        emoji: "💘"
    },
    {
        quote: "I want to be the reason you smile, just like you’re the reason behind mine.",
        emoji: "❤️"
    },
];

const itemVariants = {
    hidden: { opacity: 0, y: 16, scale: 0.98 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: 'spring', stiffness: 120, damping: 16, mass: 0.6 }
    },
};

const QuotesCard = ({ loveQuotes = [] }) => {
    return (
        <div className="love-quotes-section">
            <h1 className="love-quotes-title">Words from My Heart</h1>
            <div className="quotes-grid">
                {loveQuotes.map((quote, index) => (
                    <motion.div
                        key={index}
                        className="quote-card"
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ type: 'spring', stiffness: 120, damping: 16, mass: 0.6, delay: index * 0.06 }}
                    >
                        <div className="quote-content">
                            <div className="quote-emoji">{quote.emoji}</div>
                            <p className="quote-text">"{quote.quote}"</p>
                        </div>
                    </motion.div>
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