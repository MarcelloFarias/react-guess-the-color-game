import React from 'react';
import './style.css';

const Score = ({ score }) => {
    return (
        <>
            <div className='score'>
                <span>Score: {score}</span>
            </div>
        </>
    );
}

export default Score;