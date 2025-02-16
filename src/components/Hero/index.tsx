import React from 'react';
import './styles.scss';
import profileImage from '../../images/profile.jpg'

export function HeroComponent(){
    return(
        <>
            <header>
               <div className='image'>
                <img src={profileImage} alt='Profile image'/>
               </div>
               <div className='headline'>
                    <h1>Cyntia Santos</h1>
                    <h2>Fullstack software developer</h2>
                    <span>Passionate about technology, creating the future with innovation and creativity.</span>
               </div>
            </header>
        </>
    )
}

export const Hero = React.memo(HeroComponent);
