import React, {useContext} from 'react'
import {FarmContext} from "./FarmContext";



export const FarmRow = () => {


    const context = useContext(FarmContext)



    function classDefiner(arg){

        return `farmUnit noselect texture ${
            context.farmGrid[arg].plant +
            context.farmGrid[arg].stage
        }`
    }



    return (
        <div>
            <div className=' cellContainer'

            >

                {Object.keys(context.objects).map((i, index) =>
                    <div
                        className={classDefiner(i)}

                        key={`cell_${i}`}
                        onClick={
           ()=>{
               context.setFarmGridHandler(index)
           }

                        }

                    >

                      Cell  {i}
                      <br/>
                      Planted: {context.farmGrid[index].plant}
                      <br/>

                    </div>
                )}
            </div>

        </div>)

}