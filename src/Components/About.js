import React from "react";
import loan from "../images/dawsd.jpg";

const About = () => {
    return (
      <div className="about">
        <h1>About Me</h1>
        {/* <img src="https://plus.unsplash.com/premium_photo-1703631159195-9c373d5cedc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2N3x8fGVufDB8fHx8fA%3D%3D" /> */}
       
        <img src={loan} alt="my-img"/>
        <p>
          I am a Computer Science and Engineering student passionate about
          harnessing technology to solve real-world challenges. Currently
          pursuing [Your Degree] with a focus on [Specific
          Interests/Specializations], I have a strong foundation in programming
          languages like [e.g., Java, Python], data structures, algorithms, and
          software development methodologies. My academic journey is
          complemented by hands-on experience through [Internships/Projects],
          where I applied theoretical knowledge to practical scenarios. A fast
          learner and team player, I thrive in collaborative environments. Eager
          to contribute my skills in [Specific Areas of Interest], I am
          dedicated to staying updated on the latest industry trends and
          innovations.
        </p>
      </div>
    );
}

export default About;