import React from 'react'
import Card from '../../Components/Card'
import Navbar from '../Navbar/Navbar';
import "./About.css";

function About() {
    return (
        <div>
            <Navbar title="about" />
            <div className="container-fluid">
                <div className="aboutUs">
                    <center><h1>Purchase Music Genres and Albums</h1></center>
                    <center><h3>JamminJive is a music album website that offers a wide variety of genres and artists for music lovers to explore. The website provides an easy-to-navigate platform, where users can browse and purchase albums or individual tracks. With a focus on jazz, blues, and swing music, JamminJive offers an immersive experience that takes users on a journey through the history of these genres. In addition to offering music, the website also features artist bios, concert information, and reviews to keep users engaged and informed. JamminJive is the perfect destination for music enthusiasts looking to discover new sounds and expand their musical horizons.</h3></center>
                </div>
            </div>
        </div>
    )
}

export default About