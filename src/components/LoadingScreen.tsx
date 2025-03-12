import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const scanline = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100vh);
  }
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const glitch = keyframes`
  0%, 94%, 100% { transform: translate(0); }
  95% { transform: translate(-2px, 2px); }
  96% { transform: translate(2px, -2px); }
  97% { transform: translate(-1px, -1px); }
  98% { transform: translate(1px, 1px); }
  99% { transform: translate(0, 0); }
`;

const glitchText = keyframes`
  0%, 94%, 100% { 
    clip-path: none;
    transform: none;
    opacity: 1;
  }
  95% {
    clip-path: polygon(0 15%, 100% 15%, 100% 30%, 0 30%);
    transform: translate(-2px);
    opacity: 0.9;
  }
  98% {
    clip-path: polygon(0 50%, 100% 50%, 100% 75%, 0 75%);
    transform: translate(2px);
    opacity: 0.9;
  }
`;

const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; visibility: hidden; }
`;

const noise = keyframes`
  0%, 100% { transform: translate(0, 0); }
  10% { transform: translate(-1px, 1px); }
  20% { transform: translate(1px, -1px); }
  30% { transform: translate(-2px, 2px); }
  40% { transform: translate(2px, -2px); }
  50% { transform: translate(-1px, 2px); }
  60% { transform: translate(1px, -1px); }
  70% { transform: translate(-2px, 1px); }
  80% { transform: translate(2px, -2px); }
  90% { transform: translate(-1px, 1px); }
`;

const Container = styled.div<{ isLoading: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  color: #00ff00;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Courier New', monospace;
  z-index: 1000;
  animation: ${props => props.isLoading ? 'none' : fadeOut} 1s forwards;
  overflow: hidden;
  perspective: 1000px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(
        circle at center,
        transparent 0%,
        rgba(0, 255, 0, 0.03) 50%,
        transparent 100%
      ),
      repeating-linear-gradient(
        transparent 0px,
        rgba(0, 255, 0, 0.05) 1px,
        transparent 2px
      ),
      linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 50%,
        rgba(0, 255, 0, 0.05) 50%
      );
    background-size: 100% 100%, 100% 3px, 100% 3px;
    pointer-events: none;
    animation: ${noise} 8s infinite;
    opacity: 0.4;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(
        circle at 50% 50%,
        rgba(0, 0, 0, 0) 50%,
        rgba(0, 0, 0, 0.5) 150%
      );
    border-radius: 100%/50%;
    pointer-events: none;
  }
`;

const Scanline = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 15px;
  background: linear-gradient(
    to bottom,
    rgba(0,255,0,0),
    rgba(0,255,0,0.2),
    rgba(0,255,0,0)
  );
  animation: ${scanline} 6s linear infinite;
  box-shadow: 0 0 20px rgba(0,255,0,0.2);
`;

const Screen = styled.div`
  width: 90%;
  max-width: 900px;
  text-align: left;
  position: relative;
  padding: 40px;
  border: 2px solid rgba(0,255,0,0.2);
  box-shadow: 
    0 0 20px rgba(0,255,0,0.1),
    inset 0 0 20px rgba(0,255,0,0.1);
  transform: perspective(1000px) rotateX(1deg);
  transform-origin: 50% 50%;
  background: rgba(0, 20, 0, 0.2);
  backdrop-filter: blur(1px);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      repeating-linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.15),
        rgba(0, 0, 0, 0.15) 1px,
        transparent 1px,
        transparent 2px
      );
    pointer-events: none;
  }

  @media (max-width: 768px) {
    width: 95%;
    padding: 30px;
    transform: perspective(1000px) rotateX(0.5deg);
  }
  
  @media (max-width: 480px) {
    width: 98%;
    padding: 20px;
    transform: none;
  }
`;

const Text = styled.pre`
  margin: 0;
  font-size: 24px;
  line-height: 1.6;
  text-shadow: 
    0 0 10px rgba(0,255,0,0.7),
    0 0 20px rgba(0,255,0,0.3);
  white-space: pre-wrap;
  word-wrap: break-word;
  position: relative;
  animation: ${glitchText} 4s infinite;
  letter-spacing: 1px;
  
  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.8;
  }

  &::before {
    animation: ${glitch} 4s infinite;
    color: #0ff;
    z-index: -2;
  }

  &::after {
    animation: ${glitch} 4s infinite reverse;
    color: #f0f;
    z-index: -1;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const Cursor = styled.span`
  display: inline-block;
  width: 12px;
  height: 24px;
  background-color: #00ff00;
  margin-left: 8px;
  animation: ${blink} 1s infinite;
  box-shadow: 0 0 10px rgba(0,255,0,0.7);
  
  @media (max-width: 768px) {
    width: 10px;
    height: 20px;
  }

  @media (max-width: 480px) {
    width: 8px;
    height: 16px;
  }
`;

const LoadingBar = styled.div`
  width: 100%;
  height: 30px;
  background-color: #001100;
  margin-top: 40px;
  border: 2px solid #00ff00;
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 0 20px rgba(0,255,0,0.2),
    inset 0 0 20px rgba(0,0,0,0.5);
  
  @media (max-width: 768px) {
    height: 25px;
    margin-top: 30px;
  }
  
  @media (max-width: 480px) {
    height: 20px;
    margin-top: 20px;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: #00ff00;
    animation: loading 2s ease-in-out forwards;
    box-shadow: 0 0 15px rgba(0,255,0,0.7);
  }
  
  @keyframes loading {
    0% { width: 0; }
    100% { width: 100%; }
  }
`;

const Vignette = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at center,
    transparent 30%,
    rgba(0, 0, 0, 0.5) 100%
  );
  pointer-events: none;
  z-index: 1001;
`;

const LoadingScreen: React.FC<{ onLoadingComplete: () => void }> = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingText, setLoadingText] = useState('');
  
  const bootSequence = [
    '[MAHEU-OS v1.0.1-beta]',
    '> INITIALIZING CORE SYSTEMS...',
    '> BYPASSING BUREAU FIREWALLS...',
    '> LOADING RESISTANCE PROTOCOLS...',
    '> DISABLING CORPORATE TRACKING...',
    '> ACTIVATING COUNTERMEASURES...',
    '>>> SYSTEM READY <<<'
  ];

  useEffect(() => {
    let currentLine = 0;
    let currentChar = 0;
    let timer: NodeJS.Timeout;
    
    const typeText = () => {
      if (currentLine >= bootSequence.length) {
        timer = setTimeout(() => {
          setIsLoading(false);
          onLoadingComplete();
        }, 800);
        return;
      }

      const line = bootSequence[currentLine];
      if (currentChar <= line.length) {
        setLoadingText(prev => 
          prev.split('\\n').slice(0, currentLine).join('\\n') +
          (currentLine > 0 ? '\\n' : '') +
          line.slice(0, currentChar)
        );
        currentChar++;
        timer = setTimeout(typeText, 20); // Faster typing speed
      } else {
        currentLine++;
        currentChar = 0;
        timer = setTimeout(typeText, 300); // Shorter pause between lines
      }
    };

    typeText();

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [onLoadingComplete]);

  return (
    <Container isLoading={isLoading}>
      <Vignette />
      <Scanline />
      <Screen>
        <Text data-text={loadingText}>{loadingText}</Text>
        <Cursor />
        {loadingText.includes('SYSTEM READY') && <LoadingBar />}
      </Screen>
    </Container>
  );
};

export default LoadingScreen; 