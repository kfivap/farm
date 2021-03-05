import React from 'react'

import './Farm.scss'
import {FarmRow} from "./FarmRow";
import {Plants} from "./Plants";
import {FarmProvider} from "./FarmContext";
import {FarmStorage} from "./FarmHarvest";





export const Farm = () => {



    return (
        <FarmProvider>
            <div className='container p-2'>
                farm page
                <br/>
                <FarmRow/>

                <Plants/>
                <FarmStorage/>

            </div>
        </FarmProvider>
    )
}