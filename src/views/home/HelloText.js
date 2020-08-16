import React, { useEffect, useRef, useState } from 'react';

const HelloText = () => {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(ref.current);
    return () => observer.unobserve(ref.current);
  }, []);

  return <h2 ref={ref}>Hello There!</h2>;
};

export default HelloText;
