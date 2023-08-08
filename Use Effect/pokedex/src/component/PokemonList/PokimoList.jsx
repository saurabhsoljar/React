import { useEffect, useState } from "react";

function PokimonList(){

    

    useEffect(()=>{
        console.log("effect called");
    },[]);

   


    return(
        <>
            <div>
                X: {x} <button onClick={()=> setX(x+1)}>Inc</button>
            </div>
            <div>
                Y: {y} <button onClick={()=> setY(y+1)}>Inc</button>
            </div>
         </>
    )

}

export default PokimonList;