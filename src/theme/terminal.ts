export const terminalTheme = {
  colors: {
    background: '#000000',
    primary: '#00ff00',
    accent: '#00ff00',
    dimmed: 'rgba(0, 255, 0, 0.5)',
    overlay: 'rgba(0, 20, 0, 0.3)'
  },
  fonts: {
    terminal: 'VT323, "Courier New", Courier, monospace',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  terminal: {
    borderWidth: '1px',
    borderColor: 'rgba(0, 255, 0, 0.2)',
    glowStrength: '0 0 10px rgba(0, 255, 0, 0.3)'
  },
  branding: {
    companyName: 'MAHEU-OS',
    terminalPrefix: '[MAHEU-OS]'
  },
};

export const terminalAnimations = `
  @keyframes textFlicker {
    0% { opacity: 0.87; }
    50% { opacity: 1; }
    100% { opacity: 0.87; }
  }

  @keyframes scanline {
    0% { transform: translateY(0); }
    100% { transform: translateY(100%); }
  }

  @keyframes crt {
    0% { 
      transform: scale(1.02, 1.02);
      opacity: 0.3;
    }
    100% { 
      transform: scale(1, 1);
      opacity: 1;
    }
  }
`; 