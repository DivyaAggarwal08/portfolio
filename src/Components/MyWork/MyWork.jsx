import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const MyWork = () => {
    return (
        <div id="work" className='mywork'>
            <div className='mywork-title'>
                <h1> My Latest Work </h1>
                <img src={theme_pattern} alt=""></img>
            </div>

        </div>
    )
}

export default MyWork
