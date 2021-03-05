import React, {useContext} from 'react'
import {FarmContext} from "./FarmContext";



export const Plants = (props) => {

    const plants = {
        wheat:{
            name: 'wheat',
            maxStage: 7
        },
        potato:{
            name: 'potato',
            maxStage: 3
        },
        carrots:{
            name: 'carrots',
            maxStage: 3
        },
        sweetBerry:{
            name: 'sweetBerry',
            maxStage: 3
        },
        beetroots:{
            name: 'beetroots',
            maxStage: 3
        },
    }

    const aa= Array.from( Object.keys(plants))
   // console.log(aa)


const context = useContext(FarmContext)
   // console.log(cont.countHandler)




    return(<div>Plant div
<div>Test block {context.count}</div>
<div>Chosen plant {JSON.stringify(context.choosePlant)}</div>
        <div className=' cellContainer'>

            <div
                className='farmUnit noselect'
                onClick={()=>{context.choosePlantHandler('HARVEST')}}
            >
Take a harvest
            </div>

        {aa.map((i, index) =>
            <div
                className='farmUnit noselect'
                key={i}
                onClick={()=>{context.choosePlantHandler(plants[i])}}
            >
                {i}<p/>
                Max stage:
                {plants[i].maxStage}
            </div>
        )}
        </div>

    </div>)
}