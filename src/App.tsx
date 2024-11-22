import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, MotionPathPlugin);

gsap.registerPlugin(useGSAP);

const App = () => {
  const letterRef = useRef<HTMLDivElement>(null);

  function hyperEffect(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let iteration = 0;

    const dataset = (e.currentTarget as HTMLDivElement).dataset;
    const targetValue = dataset.value || ""; // Assuming a `data-value` attribute

    const interval = setInterval(() => {
      const originalText = targetValue;
      if (letterRef.current) {
        letterRef.current.innerHTML = originalText
          .split("")
          .map((_, index) => {
            if (index < iteration) {
              return originalText[index]; // Reveal the actual letter progressively
            }
            return alphabet[Math.floor(Math.random() * 26)]; // Randomize remaining letters
          })
          .join("");
      }
      iteration += 1 / 3;
      if (iteration > originalText.length) clearInterval(interval); // Stop when fully revealed
    }, 30);
  }
  return (
    <>
      <div
        ref={letterRef}
        data-value="Basheer Ahamed"
        onMouseOver={hyperEffect}
        className="text"
      >
        Basheer ahamed
      </div>
    </>
  );
};

export default App;
