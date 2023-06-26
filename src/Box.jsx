import React from 'react'
import { useState } from 'react'


const Box = ({ option }) => {
    const [voteLevel, setvoteLevel] = useState(0); 
    const [count, setcount] = useState(0);
    const handleClick = () => {
        if (voteLevel <= 200) {
            setvoteLevel(voteLevel + 20);
            setcount(count+1);
        }
        else {
            setvoteLevel(0);
        } // Increase the fluid level by 1
    };
    return (
        <>
         
        <div style={{padding:"8px"}}>
        <span style={{ color: 'white'}}>{option}</span>
            <div style={{ color: 'white', marginTop: '5px', display: 'flex', alignItems: 'center' }}>
          
                <section
                    style={{
                        width: '200px',
                        height: '20px',
                        backgroundColor: 'transparent',
                        position: 'relative',
                        cursor: 'pointer',
                        overflow: 'hidden',
                        border: '1px solid white',
                        borderRadius: '10px',
                        margin: '0px',
                    }}
                    onClick={handleClick}
                >
                    <section
                        style={{
                            width: `${voteLevel}px`,
                            height: '20px',
                            backgroundColor: 'green',
                            position: 'absolute',
                            bottom: 0,
                            transition: 'width 0.5s',
                            margin: '0px',
                            padding: '0px',
                            borderRadius:"10px"
                        }}
                    ></section>
                </section>
                <span style={{ marginLeft: '10px', color: 'white' }}>{count}</span>
            </div>
        </div>

        </>

    )
}

export default Box