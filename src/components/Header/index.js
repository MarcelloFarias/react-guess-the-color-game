import React from 'react';
import './style.css';

const Header = (props) => {
    function verifyColors() {
        if(props.clicked === props.raffled) {
            return <p>That's rigth ! the color above is {props.raffled}</p>
        }
        else if(props.clicked == undefined) {
            return <p>Can you guess the color ?</p>;
        }
        return <p>Try agin !</p>;
    }
    
    return (
        <>
            <header>
                <h2>{props.raffled}</h2>
                <button onClick={props.onClick}>New Color</button>
                <div className='output'>
                    {verifyColors()}    
                </div>
            </header>
        </>
    );
}

export default Header;