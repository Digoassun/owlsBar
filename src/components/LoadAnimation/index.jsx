import React from 'react'
import { Animation } from './styles'


const LoadAnimation = () => {
    return (
        <Animation>
            <div className="box"></div>
            <div className="logoBox">
            <div className="boxMoon">
                <img src="https://user-images.githubusercontent.com/102765815/187516244-7e152671-bb0a-41ad-b2be-9ed1114d7f53.png" className="moon" alt="" width="100px" height="100px" />
            </div>
            <div className="boxOwl">
                <img src="https://user-images.githubusercontent.com/102765815/187516317-a2e72d1c-a56d-40b8-ae2d-338afb796af5.png" className="owl" alt="" width="100px" height="100px" />
            </div>  
            </div>
                      
        </Animation>
    )
}

export default LoadAnimation