import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { KnowledgeService, Message } from '../services/knowledge';
import { getIPInfo } from '../services/ipService';
import { terminalTheme } from '../theme/terminal';

const GlobalStyle = createGlobalStyle`
  * {
    cursor: none !important;
  }
`;

const TerminalContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background: #000800;
  color: ${terminalTheme.colors.primary};
  font-family: ${terminalTheme.fonts.terminal};
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  * {
    cursor: none !important;
  }

  &:hover {
    cursor: none !important;
  }

  @keyframes textShadowFlicker {
    0% { text-shadow: 0 0 4px ${terminalTheme.colors.primary}; }
    2% { text-shadow: 0 0 8px ${terminalTheme.colors.primary}; }
    4% { text-shadow: 0 0 5px ${terminalTheme.colors.primary}; }
    19% { text-shadow: 0 0 7px ${terminalTheme.colors.primary}; }
    20% { text-shadow: 0 0 4px ${terminalTheme.colors.primary}; }
    55% { text-shadow: 0 0 6px ${terminalTheme.colors.primary}; }
    60% { text-shadow: 0 0 4px ${terminalTheme.colors.primary}; }
    90% { text-shadow: 0 0 7px ${terminalTheme.colors.primary}; }
    95% { text-shadow: 0 0 5px ${terminalTheme.colors.primary}; }
    100% { text-shadow: 0 0 4px ${terminalTheme.colors.primary}; }
  }

  &:before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      linear-gradient(rgba(0, 15, 0, 0.1) 50%, transparent 50%),
      linear-gradient(90deg, rgba(0, 255, 0, 0.03), rgba(0, 255, 0, 0.02));
    background-size: 100% 2px, 3px 100%;
    pointer-events: none;
    animation: scanline 8s linear infinite;
    opacity: 0.15;
  }

  &:after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at center,
      transparent 0%,
      rgba(0, 8, 0, 0.3) 100%
    );
    pointer-events: none;
  }
`;

const ContentWrapper = styled.div`
  width: min(85%, calc(100vh * 16/10 * 0.85));
  height: 100vh;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  padding: min(3vh, 32px);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  animation: textShadowFlicker 4s infinite;
  
  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-aspect-ratio: 16/9) {
    width: min(85%, calc(100vh * 16/9 * 0.85));
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
  margin: min(2vh, 20px) 0;
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
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
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: min(3vh, 24px);
    height: 1px;
    background: ${terminalTheme.colors.primary};
    opacity: 0.5;
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
  transition: all 0.3s ease;
  width: 100%;
  position: relative;
  text-shadow: 0 0 5px ${terminalTheme.colors.primary};
  box-shadow: 0 0 10px rgba(0, 255, 0, 0.1);
  overflow: hidden;

  @keyframes glowPulse {
    0% { box-shadow: 0 0 5px rgba(0, 255, 0, 0.1); }
    50% { box-shadow: 0 0 15px rgba(0, 255, 0, 0.2); }
    100% { box-shadow: 0 0 5px rgba(0, 255, 0, 0.1); }
  }

  &:before {
    content: '>';
    position: absolute;
    left: 10px;
    opacity: 0;
    transition: all 0.3s ease;
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
      rgba(0, 255, 0, 0.1),
      transparent
    );
    transition: 0.5s;
  }

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
      left: 100%;
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
  font-size: clamp(18px, 2.5vw, 24px);
  flex: 1;
  padding: clamp(8px, 1.5vw, 12px) 0;
  margin-left: clamp(8px, 1.5vw, 16px);
  text-shadow: 0 0 5px ${terminalTheme.colors.primary};
  position: relative;
  caret-color: transparent;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: rgba(0, 255, 0, 0.3);
  }
`;

const CustomCursor = styled.div`
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
`;

const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 20px;
`;

const PasswordPrompt = styled.div`
  color: ${terminalTheme.colors.primary};
  font-size: min(3vh, 24px);
  text-shadow: 0 0 8px ${terminalTheme.colors.primary};
  letter-spacing: 2px;
`;

const PasswordInput = styled.input`
  background: transparent;
  border: 2px solid ${terminalTheme.colors.primary};
  color: ${terminalTheme.colors.primary};
  padding: 12px 20px;
  font-family: inherit;
  font-size: min(2.5vh, 20px);
  width: 200px;
  text-align: center;
  letter-spacing: 4px;
  text-shadow: 0 0 5px ${terminalTheme.colors.primary};
  transition: all 0.3s ease;
  caret-color: ${terminalTheme.colors.primary};

  &:focus {
    outline: none;
    box-shadow: 0 0 15px rgba(0, 255, 0, 0.2);
  }

  &::placeholder {
    color: rgba(0, 255, 0, 0.3);
  }
`;

const ErrorMessage = styled.div`
  color: #ff4444;
  font-size: min(2vh, 16px);
  text-shadow: 0 0 8px #ff4444;
  opacity: 0;
  transition: opacity 0.3s ease;

  &.visible {
    opacity: 1;
  }
`;

interface ChatMessageProps extends Message {
  onOptionSelect: (text: string) => void;
  isLatest: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ text, isUser, options, onOptionSelect, isLatest }) => {
  const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  
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
            <Option key={index} onClick={() => onOptionSelect(option)}>
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

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      text,
      isUser: true
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");

    const response = KnowledgeService.getResponse(text.toLowerCase());
    setTimeout(() => {
      setMessages(prev => [...prev, response]);
    }, 500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSend(input);
  };

  if (isLoading) {
    return (
      <TerminalContainer>
        <ContentWrapper>
          <Header>MAHEU CORP - INITIALIZING SYSTEMS</Header>
          <MessageContainer>
            <Text>LOADING...</Text>
          </MessageContainer>
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
        <ContentWrapper>
          <Header>MAHEU CORP - SECURITY CHECKPOINT</Header>
          <PasswordContainer>
            <PasswordPrompt>ENTER ACCESS CODE</PasswordPrompt>
            <form onSubmit={handlePasswordSubmit}>
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
            </form>
            <ErrorMessage className={showError ? 'visible' : ''}>
              INVALID ACCESS CODE - ACCESS DENIED
            </ErrorMessage>
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
                onOptionSelect={handleSend}
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