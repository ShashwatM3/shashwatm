import React, { useState, useEffect } from "react";

const ConsoleSpinner = () => {
  const frames = ["|", "/", "-", "\\"];
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % frames.length);
    }, 100); // speed in ms

    return () => clearInterval(interval);
  }, []);

  return <span style={{ fontFamily: "monospace" }}>{frames[frameIndex]}</span>;
};

export default ConsoleSpinner;