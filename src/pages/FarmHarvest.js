import React, {useContext} from 'react'
import {FarmContext} from "./FarmContext";

export const FarmStorage = () =>{

    const context  = useContext(FarmContext)

   // console.log(context.storage.wheat)
    //console.log(Object.keys(context.storage))
    return(<div>farm storage

        {Object.keys(context.storage).map((i, index)=>
            <div
            key={i}
            >{i}: {context.storage[i]}</div>
        )

        }

    </div>)
}