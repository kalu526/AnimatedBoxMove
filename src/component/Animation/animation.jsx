import React from 'react'
import './animation.css';
import {useState} from 'react';
export default function Animation() {
    const [offset,setoffset]=useState(300);
    const handlemove=()=>{
        setoffset(offset-50);
    }
    return (
        <div className="animation">
            <div className="button">
                <button onClick={handlemove}>Move Up</button>
            </div>
            <div 
            className="box" 
            style={{transform:`translateY(${offset}px)`}}>
                     <p>box</p>
            </div>
        </div>
    )
}
