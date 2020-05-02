import React, { useState } from 'react'

export default function Flashcard({ flashcard }) {
    const [flip, setFlip] = useState(false) //show the front side
    return (
        <div 
        className={`card ${flip ? 'flip' : ''}`}
        onClick={() => setFlip(!flip)}
        >
            <div className="front">
                {flashcard.question}
                <div className="flashcard-options">
                    {flashcard.options.map(option => {
                        return <div className="flashcard-option">{option}</div>
                    })}
                </div>
            </div>
                <div className="black">{flashcard.answer}</div>
            {flip ? flashcard.answer : flashcard.question} {/* if flip is true return the answer otherwise if the flip is false return the question */}
        </div>
    )
}
