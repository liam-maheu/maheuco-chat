import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { KnowledgeService, Message } from '../services/knowledge';
import { getIPInfo } from '../services/ipService';
import { terminalTheme } from '../theme/terminal';

const GlobalStyle = createGlobalStyle`
  * {
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
    box-sizing: border-box;
  }

  html, body {
    overflow: hidden;
    position: fixed;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  #root {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  @media (min-width: 769px) {
    * {
      cursor: none !important;
    }
  }
`;

const TerminalContainer = styled.div`
  min-height: 100vh;
  min-height: -webkit-fill-available;
  width: 100%;
  max-width: 100%;
  height: 100vh;
  height: -webkit-fill-available;
  margin: 0;
  padding: 0;
  background: #000800;
  color: ${terminalTheme.colors.primary};
  font-family: ${terminalTheme.fonts.terminal};
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: fixed;
  inset: 0;
  overflow: hidden;
  overscroll-behavior: none;
  
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  padding: min(3vh, 32px);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
  animation: textShadowFlicker 4s infinite;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    padding: 12px 20px;
    padding-bottom: calc(12px + env(safe-area-inset-bottom));
    
    &.password-screen {
      overflow: hidden;
      height: 100%;
      padding: 0;
    }
  }

  @media (min-width: 769px) {
    width: min(85%, calc(100vh * 16/10 * 0.85));
    
    @media (min-aspect-ratio: 16/9) {
      width: min(85%, calc(100vh * 16/9 * 0.85));
    }
  }
`;

const Header = styled.div`
  color: ${terminalTheme.colors.primary};
  text-align: center;
  padding: min(2vh, 20px);
  font-size: min(3vh, 24px);
  letter-spacing: 3px;
  border-bottom: 1px solid ${terminalTheme.colors.primary};
  margin-bottom: min(4vh, 40px);
  text-shadow: 0 0 10px ${terminalTheme.colors.primary};
  position: relative;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    padding: 12px;
    font-size: 18px;
    letter-spacing: 2px;
    margin-bottom: 20px;
    
    &.password-header {
      margin-bottom: 0;
      border-bottom: none;
      
      &:after {
        display: none;
      }
    }
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${terminalTheme.colors.primary};
    box-shadow: 0 0 15px ${terminalTheme.colors.primary};
  }
`;

const MessageContainer = styled.div`
  margin-bottom: min(4vh, 40px);
  opacity: 0;
  animation: fadeIn 0.5s ease forwards;
  position: relative;
  width: 100%;
  max-width: 100%;
  overflow: hidden;

  @keyframes fadeIn {
    from { 
      opacity: 0; 
      transform: translateY(10px);
      filter: brightness(2) blur(1px);
    }
    to { 
      opacity: 1; 
      transform: translateY(0);
      filter: brightness(1) blur(0);
    }
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(0, 255, 0, 0.05) 50%,
      transparent 100%
    );
    animation: messageScan 2s ease-out infinite;
    opacity: 0;
  }

  @keyframes messageScan {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 0;
      transform: translateX(100%);
    }
  }
`;

const MessagesWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  margin: min(2vh, 20px) 0;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding-bottom: env(safe-area-inset-bottom);
  width: 100%;
  max-width: 100%;
  
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    margin-bottom: 60px;
  }
`;

const Timestamp = styled.span`
  color: ${terminalTheme.colors.primary};
  opacity: 0.7;
  font-size: clamp(14px, 2vw, 18px);
  margin-right: clamp(8px, 1.5vw, 16px);
`;

const Prefix = styled.span`
  color: ${terminalTheme.colors.primary};
  margin-right: clamp(8px, 1.5vw, 16px);
  font-size: clamp(14px, 2vw, 18px);
  text-shadow: 0 0 8px ${terminalTheme.colors.primary};
`;

const Text = styled.div`
  color: ${terminalTheme.colors.primary};
  white-space: pre-wrap;
  line-height: 1.6;
  margin: min(2vh, 20px) 0;
  font-size: min(2.5vh, 24px);
  padding-left: min(4vh, 40px);
  text-shadow: 0 0 5px ${terminalTheme.colors.primary};
  position: relative;
  width: 100%;
  max-width: 100%;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    font-size: 14px;
    padding-left: 24px;
    margin: 12px 0;
    min-height: 20px;
  }
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: min(3vh, 24px);
    height: 1px;
    background: ${terminalTheme.colors.primary};
    opacity: 0.5;
    transform: translateY(-50%);
    
    @media (max-width: 768px) {
      width: 16px;
    }
  }
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: min(2vh, 16px);
  margin-top: min(3vh, 32px);
  width: 100%;
`;

const Option = styled.button`
  background: transparent;
  color: ${terminalTheme.colors.primary};
  border: 2px solid ${terminalTheme.colors.primary};
  padding: min(2.5vh, 24px);
  text-align: left;
  cursor: pointer;
  font-family: inherit;
  font-size: min(2vh, 20px);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
  position: relative;
  text-shadow: 0 0 5px ${terminalTheme.colors.primary};
  box-shadow: 0 0 10px rgba(0, 255, 0, 0.1);
  overflow: hidden;
  min-height: 44px;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  transform-origin: left center;

  @media (max-width: 768px) {
    padding: 12px 16px;
    font-size: 14px;
    margin: 4px 0;
    border-width: 1px;
    
    &:active {
      background: rgba(0, 255, 0, 0.15);
      transform: translateX(8px) scale(0.99);
      box-shadow: 0 0 25px rgba(0, 255, 0, 0.25);
      transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
      
      &:after {
        opacity: 1;
        transform: translateX(100%);
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      }
    }
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(0, 255, 0, 0.2),
      transparent
    );
    opacity: 0;
    transform: translateX(0);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  @media (min-width: 769px) {
    &:hover {
      background: rgba(0, 255, 0, 0.1);
      transform: translateX(10px) scale(1.01);
      box-shadow: 0 0 20px rgba(0, 255, 0, 0.2);
      animation: glowPulse 2s infinite;
      
      &:before {
        opacity: 1;
        left: 20px;
      }
      
      &:after {
        opacity: 1;
        transform: translateX(100%);
      }
    }
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: min(3vh, 32px);
  border-top: 1px solid rgba(0, 255, 0, 0.2);
  position: relative;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #000800;
    padding: 16px 20px;
    padding-bottom: calc(16px + env(safe-area-inset-bottom));
    z-index: 2;
    border-top: 1px solid ${terminalTheme.colors.primary};
  }
  
  &:before {
    content: '';
    position: absolute;
    top: -1px;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${terminalTheme.colors.primary};
    box-shadow: 0 0 10px ${terminalTheme.colors.primary};
    opacity: 0.3;
  }
`;

const Input = styled.input`
  background: transparent;
  border: none;
  color: ${terminalTheme.colors.primary};
  font-family: inherit;
  font-size: clamp(16px, 2.5vw, 24px);
  flex: 1;
  padding: clamp(8px, 1.5vw, 12px) 0;
  margin-left: clamp(8px, 1.5vw, 16px);
  text-shadow: 0 0 5px ${terminalTheme.colors.primary};
  position: relative;
  caret-color: ${terminalTheme.colors.primary};
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 12px 0;
    
    &:focus {
      text-shadow: 0 0 8px ${terminalTheme.colors.primary};
    }
  }

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: rgba(0, 255, 0, 0.3);
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:focus::placeholder {
    opacity: 0.5;
  }
`;

const CustomCursor = styled.div`
  @media (min-width: 769px) {
    width: 32px;
    height: 32px;
    clip-path: polygon(
      0 0,
      70% 70%,
      45% 70%,
      45% 100%,
      55% 100%,
      55% 70%,
      100% 70%,
      0 0
    );
    background-color: ${terminalTheme.colors.primary};
    position: fixed;
    pointer-events: none;
    mix-blend-mode: screen;
    z-index: 9999;
    opacity: 0.9;
    box-shadow: 0 0 12px ${terminalTheme.colors.primary};
    transition: all 0.1s ease;
    will-change: transform;
    transform-origin: center;

    &.hovering {
      transform: scale(1.1);
      opacity: 1;
      box-shadow: 0 0 16px ${terminalTheme.colors.primary};
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const LoadingContainer = styled(MessageContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: calc(var(--vh, 1vh) * 100);
  margin: 0;
  padding: 20px;
  text-align: center;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    min-height: calc(var(--vh, 1vh) * 100 - env(safe-area-inset-bottom));
    padding: 16px;
    margin: 0;
  }
`;

const LoadingText = styled(Text)`
  font-size: min(4vh, 32px);
  margin: 0;
  padding: 0;
  width: 100%;
  text-align: center;
  
  &:before {
    display: none;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    padding: 0 16px;
    word-break: break-word;
  }
`;

const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  padding: 20px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 16px;
    /* Adjust for mobile keyboard */
    @media (max-height: 500px) {
      position: absolute;
      justify-content: flex-start;
      padding-top: min(15vh, 80px);
    }
  }
`;

const PasswordPrompt = styled.div`
  color: ${terminalTheme.colors.primary};
  font-size: min(3vh, 24px);
  text-shadow: 0 0 8px ${terminalTheme.colors.primary};
  letter-spacing: 2px;
  text-align: center;
  margin-bottom: min(4vh, 32px);
  width: 100%;
  max-width: 300px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 24px;
    
    @media (max-height: 500px) {
      font-size: 18px;
      margin-bottom: 16px;
    }
  }
`;

const PasswordForm = styled.form`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: min(3vh, 24px);
`;

const PasswordInput = styled.input`
  background: transparent;
  border: 2px solid ${terminalTheme.colors.primary};
  color: ${terminalTheme.colors.primary};
  padding: min(2vh, 16px) 20px;
  font-family: inherit;
  font-size: min(2.5vh, 20px);
  width: 100%;
  max-width: 200px;
  text-align: center;
  letter-spacing: 4px;
  text-shadow: 0 0 5px ${terminalTheme.colors.primary};
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  caret-color: ${terminalTheme.colors.primary};
  border-radius: 0;
  -webkit-appearance: none;
  box-sizing: border-box;
  transform-origin: center;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 20px rgba(0, 255, 0, 0.25);
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }

  &::placeholder {
    color: rgba(0, 255, 0, 0.3);
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:focus::placeholder {
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 14px 16px;
    max-width: 180px;
    
    &:focus {
      transform: scale(1.01);
    }
    
    &:active {
      transform: scale(0.99);
    }
    
    @media (max-height: 500px) {
      padding: 12px;
      font-size: 16px;
      max-width: 160px;
    }
  }
`;

const ErrorMessage = styled.div`
  color: #ff4444;
  font-size: min(2vh, 16px);
  text-shadow: 0 0 8px #ff4444;
  opacity: 0;
  transition: opacity 0.3s ease;
  text-align: center;
  min-height: 20px;
  width: 100%;
  max-width: 250px;

  &.visible {
    opacity: 1;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    max-width: 220px;
    
    @media (max-height: 500px) {
      font-size: 12px;
      min-height: 16px;
    }
  }
`;

interface ChatMessageProps extends Message {
  onOptionSelect: (text: string) => void;
  isLatest: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ text, isUser, options, onOptionSelect, isLatest }) => {
  const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  
  const handleOptionClick = (option: string) => {
    if (onOptionSelect) {
      const activeElement = document.activeElement as HTMLElement;
      activeElement?.blur();
      setTimeout(() => {
        onOptionSelect(option);
      }, 50);
    }
  };
  
  return (
    <MessageContainer>
      <div>
        <Timestamp>{timestamp}</Timestamp>
        <Prefix>{isUser ? '>' : '[MAHEU-OS v1.0.1]'}</Prefix>
      </div>
      <Text>{text}</Text>
      {!isUser && options && isLatest && (
        <Options>
          {options.map((option, index) => (
            <Option 
              key={index} 
              onClick={() => handleOptionClick(option)}
              type="button"
              tabIndex={-1}
              aria-label={option}
            >
              {option}
            </Option>
          ))}
        </Options>
      )}
    </MessageContainer>
  );
};

export const ChatTerminal: React.FC = () => {
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [input, setInput] = React.useState("");
  const [cursorPos, setCursorPos] = React.useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [showError, setShowError] = React.useState(false);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (window.matchMedia('(min-width: 769px)').matches) {
      const handleMouseMove = (e: MouseEvent) => {
        setCursorPos({ x: e.clientX, y: e.clientY });
        
        // Check if hovering over clickable elements
        const element = document.elementFromPoint(e.clientX, e.clientY);
        setIsHovering(
          element?.tagName === 'BUTTON' || 
          element?.tagName === 'INPUT' || 
          element?.tagName === 'A'
        );
      };

      document.addEventListener('mousemove', handleMouseMove);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    scrollToBottom();
    inputRef.current?.focus();
  }, [messages]);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "KD637") {
      setIsAuthenticated(true);
      initializeChat();
    } else {
      setShowError(true);
      setPassword("");
      setTimeout(() => setShowError(false), 3000);
    }
  };

  const initializeChat = async () => {
    try {
      const ipInfo = await getIPInfo();
      const locationStr = [ipInfo.city, ipInfo.region, ipInfo.country]
        .filter(Boolean)
        .join(", ");

      const initialMessage: Message = {
        text: `*ESTABLISHING SECURE CONNECTION*
SCANNING NETWORK...
DETECTED IP: ${ipInfo.ip}
LOCATION: ${locationStr || 'LOCATION DATA RESTRICTED'}
${ipInfo.org ? `NETWORK: ${ipInfo.org}` : ''}
TIMEZONE: ${ipInfo.timezone || 'UNKNOWN'}

*SECURE CONNECTION ESTABLISHED*
Welcome to MAHEU-OS Terminal. I see you're connecting from ${ipInfo.city || 'an undisclosed location'}. 
How may I assist you today?`,
        isUser: false,
        options: [
          "Tell me about the Optimization Bureau",
          "What technologies do you use?",
          "Check system status",
          "Who is your creator?"
        ]
      };

      setMessages([initialMessage]);
    } catch (error) {
      // Fallback greeting if IP lookup fails
      const fallbackMessage: Message = {
        text: "Welcome to MAHEU-OS Terminal. How may I assist you today?",
        isUser: false,
        options: [
          "Tell me about the Optimization Bureau",
          "What technologies do you use?",
          "Check system status",
          "Who is your creator?"
        ]
      };
      setMessages([fallbackMessage]);
    }
  };

  React.useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (passwordRef.current) {
        passwordRef.current.focus();
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleOptionSelect = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      text,
      isUser: true
    };

    setMessages(prev => [...prev, userMessage]);
    
    try {
      const response = await KnowledgeService.getResponse(text.toLowerCase());
      setTimeout(() => {
        setMessages(prev => [...prev, response]);
      }, 500);
    } catch (error) {
      console.error('Error getting response:', error);
    }
  };

  const handleTextSubmit = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      text,
      isUser: true
    };

    setMessages(prev => [...prev, userMessage]);
    setInput(""); // Clear input only for text submissions

    try {
      const response = await KnowledgeService.getResponse(text.toLowerCase());
      setTimeout(() => {
        setMessages(prev => [...prev, response]);
      }, 500);
    } catch (error) {
      console.error('Error getting response:', error);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleTextSubmit(input);
  };

  React.useEffect(() => {
    const setInitialHeight = () => {
      // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
      const vh = window.innerHeight * 0.01;
      // Then we set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // We listen to the resize event
    setInitialHeight();
    window.addEventListener('resize', setInitialHeight);
    window.addEventListener('orientationchange', () => {
      // Wait for orientation change to complete
      setTimeout(setInitialHeight, 100);
    });

    return () => {
      window.removeEventListener('resize', setInitialHeight);
      window.removeEventListener('orientationchange', setInitialHeight);
    };
  }, []);

  React.useEffect(() => {
    const input = inputRef.current;
    if (!input) return;

    const handleFocus = () => {
      // On iOS, wait for keyboard animation
      setTimeout(() => {
        input.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    };

    const handleBlur = () => {
      // Reset scroll position when keyboard hides
      window.scrollTo(0, 0);
    };

    input.addEventListener('focus', handleFocus);
    input.addEventListener('blur', handleBlur);

    return () => {
      input.removeEventListener('focus', handleFocus);
      input.removeEventListener('blur', handleBlur);
    };
  }, []);

  if (isLoading) {
    return (
      <TerminalContainer>
        <ContentWrapper style={{ padding: 0 }}>
          <Header>MAHEU CORP - INITIALIZING SYSTEMS</Header>
          <LoadingContainer>
            <LoadingText>INITIALIZING MAHEU-OS...</LoadingText>
          </LoadingContainer>
        </ContentWrapper>
      </TerminalContainer>
    );
  }

  if (!isAuthenticated) {
    return (
      <TerminalContainer>
        <CustomCursor 
          className={isHovering ? 'hovering' : ''}
          style={{ 
            left: `${cursorPos.x}px`, 
            top: `${cursorPos.y}px`,
            transform: 'translate(-50%, -50%)'
          }} 
        />
        <ContentWrapper className="password-screen">
          <Header className="password-header">MAHEU CORP - SECURITY CHECKPOINT</Header>
          <PasswordContainer>
            <PasswordPrompt>ENTER ACCESS CODE</PasswordPrompt>
            <PasswordForm onSubmit={handlePasswordSubmit}>
              <PasswordInput
                ref={passwordRef}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="●●●●●"
                maxLength={5}
                autoComplete="off"
                spellCheck={false}
              />
              <ErrorMessage className={showError ? 'visible' : ''}>
                INVALID ACCESS CODE - ACCESS DENIED
              </ErrorMessage>
            </PasswordForm>
          </PasswordContainer>
        </ContentWrapper>
      </TerminalContainer>
    );
  }

  return (
    <>
      <GlobalStyle />
      <TerminalContainer>
        <CustomCursor 
          className={isHovering ? 'hovering' : ''}
          style={{ 
            left: `${cursorPos.x}px`, 
            top: `${cursorPos.y}px`,
            transform: 'translate(-50%, -50%)'
          }} 
        />
        <ContentWrapper>
          <Header>MAHEU CORP - SECURE TERMINAL CONNECTION</Header>
          <MessagesWrapper>
            {messages.map((message, index) => (
              <ChatMessage 
                key={index} 
                {...message} 
                onOptionSelect={handleOptionSelect}
                isLatest={index === messages.length - 1}
              />
            ))}
            <div ref={messagesEndRef} />
          </MessagesWrapper>
          <form onSubmit={handleSubmit}>
            <InputContainer>
              <Prefix>{'>'}</Prefix>
              <Input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter command..."
                spellCheck={false}
                autoComplete="off"
              />
            </InputContainer>
          </form>
        </ContentWrapper>
      </TerminalContainer>
    </>
  );
}; 