import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@500;700&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; scroll-padding-top: 92px; }
  body {
    background:
      radial-gradient(circle at 10% 10%, hsl(193 95% 58% / 0.08), transparent 35%),
      radial-gradient(circle at 90% 15%, hsl(274 85% 68% / 0.08), transparent 40%),
      radial-gradient(circle at 50% 100%, hsl(151 72% 49% / 0.05), transparent 50%),
      ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.foreground};
    font-family: ${({ theme }) => theme.fonts.body};
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    background-image:
      linear-gradient(hsl(0 0% 100% / 0.02) 1px, transparent 1px),
      linear-gradient(90deg, hsl(0 0% 100% / 0.02) 1px, transparent 1px);
    background-size: 42px 42px;
    mask-image: radial-gradient(circle at center, black 35%, transparent 100%);
    z-index: -1;
  }
  h1,h2,h3,h4,h5,h6 { font-family: ${({ theme }) => theme.fonts.heading}; letter-spacing: -0.02em; }
  a { color: inherit; text-decoration: none; }
  button { font: inherit; color: inherit; background: transparent; border: 0; cursor: pointer; }
  img { max-width: 100%; display: block; }
  ::selection { background: hsl(193 95% 58% / 0.22); color: white; }
  ::-webkit-scrollbar { width: 8px; }
  ::-webkit-scrollbar-track { background: hsl(228 32% 7%); }
  ::-webkit-scrollbar-thumb { background: linear-gradient(hsl(193 95% 58% / 0.45), hsl(274 85% 68% / 0.45)); border-radius: 99px; }

  .text-gradient {
    background-image: linear-gradient(120deg, hsl(193 95% 58%), hsl(274 85% 68%) 55%, hsl(151 72% 49%));
    -webkit-background-clip: text; background-clip: text; color: transparent;
  }
  .glass {
    background: linear-gradient(180deg, hsl(230 24% 13% / 0.72), hsl(229 20% 12% / 0.62));
    backdrop-filter: blur(14px);
    border: 1px solid hsl(228 19% 22% / 0.7);
    box-shadow: 0 20px 60px hsl(230 60% 3% / 0.35);
  }
  .glow-border { border: 1px solid hsl(193 95% 58% / 0.18); box-shadow: inset 0 1px 0 hsl(0 0% 100% / 0.03); }
  .glow-sm { box-shadow: 0 8px 25px hsl(193 95% 58% / 0.18); }
  .glow-md { box-shadow: 0 16px 45px hsl(193 95% 58% / 0.12), 0 18px 50px hsl(274 85% 68% / 0.08); }
  .font-mono { font-family: 'JetBrains Mono', monospace; }
`;
