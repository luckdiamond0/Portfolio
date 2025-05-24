import React, { useRef, useState, useEffect } from 'react';
import './Code-display.css';

function Code_display() {
  const tiltRef = useRef(null);
  const [tiltSettings] = useState({
    max: 15,       // max tilt rotation (degrees)
    perspective: 1000,  // perspective value
    scale: 1.04,   // scale on hover
    speed: 500,    // speed of transition
    easing: 'cubic-bezier(.03,.98,.52,.99)' // easing for transition
  });

  const handleMouseMove = (e) => {
    if (!tiltRef.current) return;

    const card = tiltRef.current;
    const cardRect = card.getBoundingClientRect();

    // Get mouse position relative to card
    const cardX = e.clientX - cardRect.left;
    const cardY = e.clientY - cardRect.top;

    // Calculate rotation based on mouse position
    const percentX = cardX / cardRect.width;
    const percentY = cardY / cardRect.height;

    // Calculate tilt values (reverse the direction for natural feel)
    const tiltX = (percentY - 0.5) * tiltSettings.max * 2;
    const tiltY = (0.5 - percentX) * tiltSettings.max * 2;

    // Apply transform to card
    card.style.transform = `perspective(${tiltSettings.perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(${tiltSettings.scale}, ${tiltSettings.scale}, ${tiltSettings.scale})`;
  };

  const handleMouseEnter = () => {
    if (!tiltRef.current) return;
    const card = tiltRef.current;

    // Set transition on enter
    card.style.transition = `transform ${tiltSettings.speed}ms ${tiltSettings.easing}`;

    // Reset any previous transition after a frame
    setTimeout(() => {
      if (card) card.style.transition = '';
    }, 50);
  };

  const handleMouseLeave = () => {
    if (!tiltRef.current) return;
    const card = tiltRef.current;

    // Set transition on leave
    card.style.transition = `transform ${tiltSettings.speed}ms ${tiltSettings.easing}`;

    // Reset transform
    card.style.transform = `perspective(${tiltSettings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <div className='code-main-container'>
      <div
        className="code-display-container"
        ref={tiltRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="code-glow"></div>
        <div className="code-window">
          <div className="window-controls">
            <div className="control red"></div>
            <div className="control yellow"></div>
            <div className="control green"></div>
          </div>
          <pre className="code-content">
            <code>
              <span className="code-keyword">const</span> developer = {"{"}
              <br />
              {"  "}name: <span className="code-string">"Luckdiamond0"</span>,
              <br />
              {"  "}skills: [<span className="code-string">"React"</span>,{" "}
              <span className="code-string">"C#"</span>, <span className="code-string">".NET"</span>],
              <br />
              {"  "}passion: <span className="code-string">"Building amazing web experiences"</span>
              <br />
              {"}"};
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}

export default Code_display;