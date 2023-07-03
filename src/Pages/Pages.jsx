import React from 'react';
import Banner from './Banner/Banner';
import Experience from './Experience/Experience';
import About from './About/About';
import Project from './About/Project/Project';
import MyServices from './MyServices/MyServices';



const Pages = () => {
    return (
        <div>
         
           <Banner></Banner>
           <Experience></Experience>
            <Project></Project>
            <MyServices></MyServices>
            <About></About>
        </div>
    );
};

export default Pages;