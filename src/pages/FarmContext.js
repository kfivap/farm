import React, {useState} from 'react'

export const FarmContext  = React.createContext()


const maxStages = {
    wheat: 7,
    potato: 3,
    carrots: 3,
    beetroots: 3,
    sweetBerry: 3

}



export const FarmProvider = ({children}) =>{

    const [storage, setStorage]= useState({
        wheat: 0,
        potato: 0,
        carrots: 0,
        beetroots: 0,
        sweetBerry: 0
    })

    const [choosePlant, setChoosePlant]= useState(false)

    const choosePlantHandler = (arg)=>{
       // console.log(choosePlant)
        setChoosePlant(arg)
    }


    const objects = {};
    for (let x = 0; x < 12; x++) {
        objects[x] = {
            cell: x,
            plant: false,
            stage: 0,

        };
    } //just a gemerator

  const [farmGrid, setFarmGrid] = useState(objects)



    const setFarmGridHandler = (arg)=>{


        if(choosePlant ==="HARVEST"){

            // console.log(farmGrid[arg].stage)  //текущая стадия
            // console.log(maxStages[farmGrid[arg].plant]) //макс стадия

            if(farmGrid[arg].stage ===maxStages[farmGrid[arg].plant]){
                console.log('созрело')




            storage[farmGrid[arg].plant]++

                setStorage({
                    ...storage
                })

                console.log(storage)
            }



            farmGrid[arg] = {...farmGrid[arg],
                plant: false,
                stage: 0,
            }
            setFarmGrid({...farmGrid, farmGrid})
          //  console.log(farmGrid[arg])


            return;

        }

        if(farmGrid[arg].plant && farmGrid[arg].plant!==choosePlant.name){
            console.log('пока что сменить нельзя')
            return;
        }

        if(farmGrid[arg].plant && farmGrid[arg].stage<maxStages[farmGrid[arg].plant]){

            farmGrid[arg] = {...farmGrid[arg],
                stage: farmGrid[arg].stage+1
            }
            setFarmGrid({...farmGrid, farmGrid})
          //  console.log(farmGrid[arg].stage)
            return
        }



    if(choosePlant) {

        farmGrid[arg] = {...farmGrid[arg],
            plant: choosePlant.name,


        }
        setFarmGrid({...farmGrid, farmGrid})
    }


    }




    return(
        <FarmContext.Provider value={{
            choosePlantHandler, choosePlant,

            farmGrid, setFarmGridHandler,

            objects, storage

        }}>
            {children}
        </FarmContext.Provider>
    )

}