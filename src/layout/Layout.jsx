import React from 'react';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';

export const Layout = ({children}) =>{
    return(
        <div>
            <Navbar />
            <Hero/>
            {children}
            <Footer />
        </div>
    )
}