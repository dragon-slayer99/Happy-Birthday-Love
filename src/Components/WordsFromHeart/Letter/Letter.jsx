import './Letter.css';
import { motion } from 'framer-motion';


const letters = [
    {
        emoji: "❤️",
        title: "Forever and always",
        description: "I don’t believe in forever or eternity, but if such things really do exist, then I’d want to spend them with you. surrounded by the people we love and cherish, gives me hope that happiness can truly last."
    },
    {
        emoji: "💗",
        title: "Everyday with you",
        description: "You’re the reason I look forward to going to college each day. You inspire me to go beyond what I thought I was capable of, and you give me hope for a future that feels brighter because you’re in it."
    },
];



// Remove container staggering; animate each card when it enters viewport

const cardVariants = {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: 'spring', stiffness: 120, damping: 16, mass: 0.6 },
    },
};

function Letter() {
    return (
        <section className='letter-wrapper' id='love-letter'>
            <h1 className='letter-title'>Confession</h1>
            <div
                className="letter-container"
            >
                {letters.map((letter, index) => (
                    <motion.div
                        key={`${index},${letter.emoji},${letter.title}`}
                        className='letter-card'
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ type: 'spring', stiffness: 120, damping: 16, mass: 0.6, delay: index * 0.08 }}
                    >
                        <h1>{letter.emoji}</h1>
                        <h2>{letter.title}</h2>
                        <p>{letter.description}</p>
                    </motion.div>
                ))}
            </div>

        </section>
    )
}
export default Letter;