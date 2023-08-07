import Typewriter from 'typewriter-effect';


function TypeWork(){
    return(
        <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString('Hola, soy Wilson!')
            .pauseFor(2500)
            .start();
        }}
      />
    )
}

export {TypeWork}