import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 80px;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.foreground};
    font-family: ${({ theme }) => theme.fonts.body};
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font: inherit;
    color: inherit;
    background: transparent;
    border: 0;
    cursor: pointer;
  }

  ::selection {
    background: hsl(152 70% 50% / 0.3);
    color: hsl(210 20% 95%);
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: hsl(222 47% 6%);
  }
  ::-webkit-scrollbar-thumb {
    background: hsl(152 70% 50% / 0.3);
    border-radius: 3px;
  }

  /* Utility-ish classes used by the Lovable layout */
  .text-gradient {
    background-image: linear-gradient(90deg, hsl(152 70% 50%), hsl(152 60% 40%));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .glow-sm {
    box-shadow: 0 0 15px -3px hsl(152 70% 50% / 0.15);
  }

  .glow-md {
    box-shadow: 0 0 30px -5px hsl(152 70% 50% / 0.2);
  }

  .glow-border {
    border: 1px solid hsl(152 70% 50% / 0.2);
  }

  .glass {
    background: hsl(222 40% 10% / 0.7);
    backdrop-filter: blur(12px);
    border: 1px solid hsl(222 20% 18% / 0.5);
  }

  .font-mono {
    font-family: 'JetBrains Mono', monospace;
  }
`;
