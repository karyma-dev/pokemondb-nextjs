import React, { ReactElement } from 'react'
import Background from '../components/Background'
import Home from '../components/Home'
import Navbar from '../components/Navbar'

const Homepage = (): ReactElement => {
    return (
        <Background>
            <Navbar />
            <Home />
        </Background>
    )
}

export default Homepage
