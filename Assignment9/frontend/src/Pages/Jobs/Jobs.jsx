import React from 'react'
import Card from '../../Components/Card'
import Navbar from '../Navbar/Navbar'

function Jobs() {
  const imageUrls = [
    {
        id: 1,
        url: "adobe.jpg",
        title: "UI/UX Developer",
    },
    {
        id: 2,
        url: "sde2.jpg",
        title: "SDE 2 Frontend engineer"
    },
    {
        id: 3,
        url: "react.jpg",
        title: "Frontend developer"
    },
    {
        id: 4,
        url: "content-writer.jpg",
        title: "Content Creator"
    },
    {
        id: 5,
        url: "sales.jpg",
        title: "Sales Associate"
    }
];
  return (
    <div>
      <Navbar title="jobs" />
      <div className="games-container">
        {imageUrls.map(imageUrl => (<Card
          key={imageUrl.id}
          src={imageUrl.url}
          title={imageUrl.title}
          buttonText="APPLY"
          imageStyle="150px"
          galleryStyle="80%"
        />))}
      </div>
    </div>
  )
}

export default Jobs
