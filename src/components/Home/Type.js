import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Full - Stack Developer",
          "Problem Solver",
          "Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 75,
      }}
    />
  );
}

export default Type;
