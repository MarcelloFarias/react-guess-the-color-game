import React from 'react';
import './style.css';

const Square = ({ style, onClick }) => {
    return (
      <>
        <div className='square' style={style} onClick={onClick}>

        </div>
      </>
    );
}

export default Square;