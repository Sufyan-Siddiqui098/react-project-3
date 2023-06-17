import React, { useContext, useRef } from 'react'
import DrumContext from '../context/DrumContext'


const Keys = () => {
  const context = useContext(DrumContext);
  const {drumKey}=context;
  const {heater1, heater2, heater3, heater4, heater5, heater6, heater7, heater8, heater9} = drumKey;
  
  const audioRefs = {
    Q: useRef(null),
    W: useRef(null),
    E: useRef(null),
    A: useRef(null),
    S: useRef(null),
    D: useRef(null),
    Z: useRef(null),
    X: useRef(null),
    C: useRef(null),
  }
  const play=(key)=>{
      const audioRef = audioRefs[key]
      if(audioRef.current){
         return audioRef.current.play()
      }
  }

  return (
    <div className='grid' id='drum-machine'>
      <div className="grid-3">
       
        <button className='drum-pad' onClick={()=>{play('Q')}}> Q
          <audio src={heater1} ref={audioRefs.Q}  id='Q' ></audio>
        </button>
        
        <button className='drum-pad' onClick={()=>{play("W")}}> W
          <audio src={heater2} ref={audioRefs.W}  id='W' ></audio>
        </button>
        
        <button className='drum-pad' onClick={()=>{play("E")}}> E
          <audio src={heater3} ref={audioRefs.E}  id='E' ></audio>
        </button>
        
        <button className='drum-pad' onClick={()=>{play("A")}}> A
          <audio src={heater4} ref={audioRefs.A}  id='A' ></audio>
        </button>

        <button className='drum-pad' onClick={()=>{play("S")}}> S
          <audio src={heater5} ref={audioRefs.S}  id='S' ></audio>
        </button>
        <button className='drum-pad' onClick={()=>{play("D")}}> D
          <audio src={heater6} ref={audioRefs.D}  id='D' ></audio>
        </button>
        <button className='drum-pad' onClick={()=>{play("Z")}}> Z
          <audio src={heater7} ref={audioRefs.Z}  id='Z' ></audio>  
        </button>
        <button className='drum-pad' onClick={()=>{play("X")}}> X
          <audio src={heater8} ref={audioRefs.X}  id='X' ></audio>  
        </button>
        <button className='drum-pad' onClick={()=>{play("C")}}> C
          <audio src={heater9} ref={audioRefs.C}  id='C' ></audio>  
        </button>

      </div>
       
       <div id="display"></div>
     </div>
  )
}


export default Keys;