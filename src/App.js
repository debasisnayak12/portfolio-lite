import React from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Section from "./Components/Section";
import sectionData from "./sectionData/sectionData";
import Footer from "./Components/Footer";



const App = () => {
  // let a = 100;
  // let b = 50;

  return (
    <div>
      <Navbar />
      <About />
      {
         sectionData.map((item, index)=>(
          <Section key={index}
          title={item.title} 
          description={item.description} 
          />
         ))
      }

      {/* {
        a>b ? (<h1>Greater num is {a}</h1>) :       (<h1>Greater num is {b}</h1>)
      } */}

    </div>
  );
};

export default App;
