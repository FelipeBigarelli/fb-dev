import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  overflow-x: clip;

  &::before,
  &::after {
    content: '';
    position: fixed;
    width: 36rem;
    height: 36rem;
    filter: blur(90px);
    z-index: -1;
    opacity: 0.12;
    pointer-events: none;
  }

  &::before {
    top: 12vh;
    left: -10rem;
    background: ${({ theme }) => theme.colors.primary};
    animation: floatBlobA 14s ease-in-out infinite;
  }

  &::after {
    top: 55vh;
    right: -12rem;
    background: ${({ theme }) => theme.colors.accent};
    animation: floatBlobB 18s ease-in-out infinite;
  }

  @keyframes floatBlobA {
    0%,100% { transform: translate3d(0,0,0) scale(1); }
    50% { transform: translate3d(30px,-20px,0) scale(1.08); }
  }
  @keyframes floatBlobB {
    0%,100% { transform: translate3d(0,0,0) scale(1); }
    50% { transform: translate3d(-40px,25px,0) scale(1.05); }
  }
`;
