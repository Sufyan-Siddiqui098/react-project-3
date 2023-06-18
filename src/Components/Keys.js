import React, { useContext,useState, useRef } from 'react'
import DrumContext from '../context/DrumContext'


const Keys = () => {
  const context = useContext(DrumContext);
  const {drumKey,music}=context;
  const {heater1, heater2, heater3, heater4, heater5, heater6, heater7, heater8, heater9} = drumKey;
  const [display, setDisplay] = useState('')
  const [power , setPower] = useState(true);
  const [vol, setvol] = useState(70)
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
    if(power){
      const audioRef = audioRefs[key]
      audioRef.current.volume = vol/100;
      setDisplay(music[key])
     
      if(audioRef.current){
         return audioRef.current.play()
      }
    }
      
  }

  return (
    <div className='grid' id='drum-machine'>
      <div className="grid-3">
       
        <button className='drum-pad' id='1' onClick={()=>{play('Q')}}> Q
          <audio src={heater1} ref={audioRefs.Q}  className='clip' id='Q' ></audio>
        </button>
        
        <button className='drum-pad' id='2' onClick={()=>{play("W")}}> W
          <audio src={heater2} ref={audioRefs.W}  className='clip' id='W' ></audio>
        </button>
        
        <button className='drum-pad' id='3' onClick={()=>{play("E")}}> E
          <audio src={heater3} ref={audioRefs.E}  className='clip' id='E' ></audio>
        </button>
        
        <button className='drum-pad' id='4' onClick={()=>{play("A")}}> A
          <audio src={heater4} ref={audioRefs.A}  className='clip' id='A' ></audio>
        </button>

        <button className='drum-pad' id='5' onClick={()=>{play("S")}}> S
          <audio src={heater5} ref={audioRefs.S}  className='clip' id='S' ></audio>
        </button>
        <button className='drum-pad' id='6' onClick={()=>{play("D")}}> D
          <audio src={heater6} ref={audioRefs.D}  className='clip' id='D' ></audio>
        </button>
        <button className='drum-pad' id='7' onClick={()=>{play("Z")}}> Z
          <audio src={heater7} ref={audioRefs.Z}  className='clip' id='Z' ></audio>  
        </button>
        <button className='drum-pad' id='8' onClick={()=>{play("X")}}> X
          <audio src={heater8} ref={audioRefs.X}  className='clip' id='X' ></audio>  
        </button>
        <button className='drum-pad' id='9' onClick={()=>{play("C")}}> C
          <audio src={heater9} ref={audioRefs.C}  className='clip' id='C' ></audio>  
        </button>

      </div>
      <div className='right-wrapper'>
        <button className='btn' onClick={()=>{setPower(!power)}}>{power?"On":"Off"}</button>
       <div id="display">{display}</div>
        <input type="range" name="volume" id="volume" min="0" max="100" onClick={(e)=>{setDisplay(`Volume ${e.target.value}`); setvol(e.target.value)}}/>
      </div>
     </div>
  )
}


export default Keys;