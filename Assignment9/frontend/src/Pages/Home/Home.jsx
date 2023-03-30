import React from 'react'
import Card from '../../Components/Card';
import Navbar from '../Navbar/Navbar';
import "./Home.css";

function Home() {
    const imageUrls = [
        {
            id: 1,
            url: "pop.jpg",
            title: "Britney by Britney Spears ($10.99)",
        },
        {
            id: 2,
            url: "jazz.jpg",
            title: "'Shapes and Stories', Milena Jancuric ($9.99)"
        },
        {
            id: 3,
            url: "party.jpg",
            title: "A Town Called Paradise (Deluxe) ($10.99)"
        },
        {
            id: 4,
            url: "guitar.jpg",
            title: "Enchantingly Wicked (CD) ($4.99)"
        },
        {
            id: 5,
            url: "perform.jpg",
            title: "Songs of the Phoenix (CD) ($5.99)"
        },
        {
            id: 6,
            url: "sing.jpg",
            title: "I am Harvey Milk (CD) ($9.99)"
        },
    ];
    return (
        <div>
            <Navbar title="home" />
            <div className="game-title-header">
            <h1>
            JamminJive
            </h1>
            </div>

            <div className="games-title">
                <h1>Hit Music Albums</h1>
            </div>
            <div className="games-container">
                {imageUrls.map(imageUrl => (<Card
                    key={imageUrl.id}
                    src={imageUrl.url}
                    title={imageUrl.title}
                    buttonText="ADD TO CART"
                    imageStyle="auto"
                    galleryStyle="auto"
                />))}
            </div>
            <div>
                <br />
                <div style={{ textAlign: 'center' }}>
                    <h4>Upcoming Top Albums</h4>
                    {/* <hr style={{ width: '50%' }} /> */}
                </div>

                <table id="customers">
                    <tr>
                        <th>Name</th>
                        <th>Platform</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>Erika Sirola: Who? EP</td>
                        <td>Elektra Records</td>
                        <td>$39.9</td>
                        <td><button className="add" style={{ padding: '5px' }}>ADD TO CART</button></td>
                    </tr>
                    <tr>
                        <td>Andy McCoy: Jukebox Junkie</td>
                        <td>Cleopatra Records</td>
                        <td>$59.9</td>
                        <td><button className="add" style={{ padding: '5px' }}>ADD TO CART</button></td>
                    </tr>
                    <tr>
                        <td>Tomppabeats: Habits </td>
                        <td>Vinyl Digital</td>
                        <td>$29.9</td>
                        <td><button className="add" style={{ padding: '5px' }}>ADD TO CART</button></td>
                    </tr>
                    <tr>
                        <td>Airi’s: Kind Little One </td>
                        <td>V.R. Label</td>
                        <td>$39.9</td>
                        <td><button className="add" style={{ padding: '5px' }}>ADD TO CART</button></td>
                    </tr>
                </table>
                <br />

                <div style={{ textAlign: 'center' }}>
                    <a href="#">Submit queries</a>
                </div>

                <br />

            </div>
        </div>
    )
}

export default Home