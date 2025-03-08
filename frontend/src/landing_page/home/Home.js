import React from 'react';
import HeroHome from './HeroHome';
import Awards from "./Awards";
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';

import OpenAccount from '../OpenAccount';

export default function Home(){
    return(
        <>

            <HeroHome />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />

        </>
    )
}