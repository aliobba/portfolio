import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Ingénieur Informatique",
          "Développeur Web",
          "Développeur Mobile",
          "Développeur Backend",
          "BD relationnelle",
          "BD non relationnelle",
          "Développeur MERN",
          "React Native",
          "Java Développeur",
          "GraphQL",
          "Rest API",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 10,
        delay: 3
      }}
    />
  );
}

export default Type;
