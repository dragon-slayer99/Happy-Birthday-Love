import './Letter.css';


const letters = [
    {
        emoji: "❤️",
        title: "forever and always",
        description: "I don’t believe in forever or eternity, but if such things really do exist, then I’d want to spend them with you. surrounded by the people we love and cherish, gives me hope that happiness can truly last."
    },
    {
        emoji: "💗",
        title: "everyday with you",
        description: "You’re the reason I look forward to going to college each day. You inspire me to go beyond what I thought I was capable of, and you give me hope for a future that feels brighter because you’re in it."
    },
];



function Letter() {
    return (
        <section className='letter-wrapper' id='love-letter'>
            <h1 className='letter-title'>Confession</h1>
            <div className="letter-container">
                { letters.map((letter, index) => (
                    <div key = {`${index},${letter.emoji},${letter.title}`} className='letter-card'>
                        <h1>{letter.emoji}</h1>
                        <h2>{letter.title}</h2>
                        <p>{letter.description}</p>
                    </div>
                ))}
            </div>

        </section>
    )
}
export default Letter;