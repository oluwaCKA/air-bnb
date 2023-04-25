import React from "react";
import Navbar from './Components/Navbar.js';
import Hero from './Components/Hero.js';
import Card from './Components/Card.js';
import data from './data.js';
import './App.css';

function App() {
  const cards = data.map(item => {
    return (
      <Card 
        /*coverImg={item.coverImg}
        title={item.title}
        price={item.price}
        stats={item.stats}
        location={item.location}
        */
       
        // or

        key={item.id}
        {...item} //or item={item}

      />
    )
  }) 
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
      
    </div>
  );
}

export default App;
