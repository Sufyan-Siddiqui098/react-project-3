import DrumContext from "./DrumContext";

const ContextStates = (props)=>{
    
    const heater1 = `https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3`
    const heater2 = `https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3`
    const heater3 = `https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3`
    const heater4 = `https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3`
    const heater5 = `https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3`;
    const heater6 = `https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3`;
    const heater7 = `https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3`;
    const heater8 = `https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3`;
    const heater9 = `https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3`;

    const drumKey = {heater1, heater2, heater3, heater4, heater5, heater6, heater7, heater8, heater9}
    
    

    
    return(
        <DrumContext.Provider value={{drumKey}}>
            {props.children}
        </DrumContext.Provider>
    )
}

export default ContextStates;