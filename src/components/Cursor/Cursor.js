import React, { useEffect, useRef } from 'react';
import { Wrapper } from './Cursor.styles';

// eslint-disable-next-line react/prop-types
const Cursor = ({ isFancy }) => {
  const cursorRef = useRef();

  const handleCursorMove = (event) => {
    const { clientX, clientY } = event;

    const mouseX = clientX - cursorRef.current.clientWidth / 2;
    const mouseY = clientY - cursorRef.current.clientHeight / 2;

    cursorRef.current.style.transform = isFancy
      ? `translate(${mouseX}px, ${mouseY}px) rotate(45deg)`
      : `translate(${mouseX}px, ${mouseY}px)`;
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleCursorMove);

    return () => document.removeEventListener('mousemove', handleCursorMove);
  }, []);

  return <Wrapper ref={cursorRef} isFancy={isFancy} />;
};

export default Cursor;
