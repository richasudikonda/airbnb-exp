import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Card from './components/Card.jsx'
import data from './data.jsx'

export default function App(){
    const cards = data.map(item =>{
        return (
            <Card 
                key ={item.id}
                {...item} //item = {item}inspite of giving everything in the app.js we will just mention item and then we will use the same in our cards.js. ...item is ES6 feature
                // img={item.coverImg}
                // rating={item.stats.rating}
                // reviewCount={item.stats.reviewCount}
                // location={item.location}
                // title={item.title}
                // price={item.price}
                // openSpots = {item.openSpots}
            />
        )
        }
    )

    return(   
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}

/*
            <Card 
                img = "Katie_Zaferes.jpeg"
                rating = "5.0"
                reviewCount = {6}
                country = "USA"
                title="Life Lessons with Katie Zaferes"
                price={136}
            />
            */