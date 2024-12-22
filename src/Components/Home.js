import React from 'react'
import Benefits from './Benefits'
import Blog from './Blog'
import OurServices from './OurServices'
import HeroSection from './HeroSection'
import MotivationRow from './MotivationRow'
import Contact from './Contact'

function Home() {
    return (
        <div>
            <HeroSection />
            <MotivationRow />
            <OurServices />
            <Benefits />
            <Blog />
           <Contact />
        </div>
    )
}

export default Home
