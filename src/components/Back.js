import React from 'react'
import ButtonRnd from './ButtonRnd'
import {ReactComponent as BackIcon} from '../assets/icons/back.svg'

function Back() {
    return (
        <div>
            <ButtonRnd btnContent={<BackIcon/>}/>
        </div>
    )
}

export default Back
