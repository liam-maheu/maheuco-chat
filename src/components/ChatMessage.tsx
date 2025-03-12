import React from 'react';
import styled from 'styled-components';
import { terminalTheme } from '../theme/terminal';

interface DialogOption {
  text: string;
  value: string;
}

export interface ChatMessageProps {
  content: string;
  type: 'user' | 'assistant';
  timestamp: string;
  options?: DialogOption[];
  onOptionSelect?: (value: string) => void;
}

const MessageContainer = styled.div<{ type: 'user' | 'assistant' }>`
  margin: ${terminalTheme.spacing.md} 0;
  padding: ${terminalTheme.spacing.lg};
  color: ${props => props.type === 'assistant' ? terminalTheme.colors.primary : terminalTheme.colors.accent};
  font-family: ${terminalTheme.fonts.terminal};
  line-height: 1.6;
  position: relative;
  font-size: clamp(1rem, 2.5vw, 1.5rem);
`;

const Timestamp = styled.span`
  color: ${terminalTheme.colors.dimmed};
  font-size: 0.8em;
  margin-right: ${terminalTheme.spacing.md};
  opacity: 0.8;
`;

const Prefix = styled.span`
  color: ${terminalTheme.colors.dimmed};
  margin-right: ${terminalTheme.spacing.md};
  font-weight: bold;
`;

const Content = styled.div`
  white-space: pre-wrap;
  word-break: break-word;
  margin-top: ${terminalTheme.spacing.sm};
`;

const DialogOptions = styled.div`
  margin-top: ${terminalTheme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${terminalTheme.spacing.sm};
`;

const DialogButton = styled.button`
  background: transparent;
  border: 2px solid ${terminalTheme.colors.primary};
  color: ${terminalTheme.colors.primary};
  font-family: ${terminalTheme.fonts.terminal};
  font-size: clamp(0.9rem, 2vw, 1.2rem);
  padding: ${terminalTheme.spacing.sm} ${terminalTheme.spacing.md};
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
  position: relative;
  
  &:hover {
    background: ${terminalTheme.colors.overlay};
    border-color: ${terminalTheme.colors.accent};
    color: ${terminalTheme.colors.accent};
    box-shadow: ${terminalTheme.terminal.glowStrength};
    transform: translateX(${terminalTheme.spacing.sm});
  }

  &:before {
    content: '>';
    position: absolute;
    left: ${terminalTheme.spacing.sm};
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &:hover:before {
    opacity: 1;
  }
`;

export const ChatMessage: React.FC<ChatMessageProps> = ({ 
  content, 
  type, 
  timestamp, 
  options, 
  onOptionSelect 
}) => {
  const formattedContent = content.replace(/\\n/g, '\n');

  return (
    <MessageContainer type={type}>
      <Timestamp>{timestamp}</Timestamp>
      <Prefix>
        {type === 'assistant' ? terminalTheme.branding.terminalPrefix : '>'} 
      </Prefix>
      <Content>{formattedContent}</Content>
      {type === 'assistant' && options && options.length > 0 && (
        <DialogOptions>
          {options.map((option, index) => (
            <DialogButton
              key={index}
              onClick={() => onOptionSelect?.(option.value)}
            >
              {option.text}
            </DialogButton>
          ))}
        </DialogOptions>
      )}
    </MessageContainer>
  );
}; 