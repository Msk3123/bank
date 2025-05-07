import React from 'react';
import styled, { keyframes } from 'styled-components';

const GoldBarsBackground = () => {
  return (
    <Container>
      {[...Array(20)].map((_, i) => (
        <GoldBar
          key={i}
          $left={Math.random() * 100}
          $top={Math.random() * 100}
          $delay={Math.random() * 5}
          $rotation={Math.random() * 360}
        />
      ))}
      <OverlayGradient />
    </Container>
  );
};

// Анимация свечения
const glow = keyframes`
  0% { opacity: 0.3; }
  50% { opacity: 0.7; }
  100% { opacity: 0.3; }
`;

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: 
    linear-gradient(
      45deg,
      #2d1a0f 0%,
      #4a2b1a 30%,
      #75512e 70%,
      #9d7a4b 100%
    );
  overflow: hidden;
  z-index: -1;
`;

const GoldBar = styled.div`
  position: absolute;
  width: 200px;
  height: 80px;
  background: 
    linear-gradient(
      145deg,
      #ffd700 0%,
      #daa520 30%,
      #b8860b 60%,
      #daa520 100%
    );
  left: ${props => props.$left}%;
  top: ${props => props.$top}%;
  transform: 
    rotate(${props => props.$rotation}deg)
    perspective(500px) rotateX(45deg);
  border-radius: 8px;
  box-shadow:
    0 0 30px rgba(218, 165, 32, 0.3),
    inset 0 -10px 20px rgba(0,0,0,0.2);
  animation: ${glow} 3s infinite;
  animation-delay: ${props => props.$delay}s;
  opacity: 0.4;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 20px;
    background: linear-gradient(
      90deg,
      transparent 10%,
      rgba(255,255,255,0.2) 50%,
      transparent 90%
    );
    top: 10px;
    left: 0;
  }
`;

const OverlayGradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(0,0,0,0.6) 0%,
    rgba(0,0,0,0.2) 50%,
    rgba(0,0,0,0.6) 100%
  );
  pointer-events: none;
`;

export default GoldBarsBackground;