import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Développeur",
          "Développeur Mobile",
          "base de données relationnelle",
          "base de données non relationnelle",
          "MERN Stack Développeur",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 25,
      }}
    />
  );
}

export default Type;
