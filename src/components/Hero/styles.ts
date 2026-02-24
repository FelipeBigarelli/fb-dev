import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const BackgroundImage = styled.div`
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0.7;
`;

export const BackgroundOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    hsl(222 47% 6% / 0.5),
    hsl(222 47% 6% / 0.8),
    hsl(222 47% 6%)
  );
`;

export const Container = styled.div`
  position: relative;
  z-index: 10;
  max-width: 896px;
  margin: 0 auto;
  padding: 0 24px;
  text-align: center;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 700;
  font-size: 40px;
  margin-bottom: 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 64px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 72px;
  }
`;

export const Subtitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.mutedForeground};
  margin-bottom: 24px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 30px;
  }
`;

export const Lead = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  max-width: 640px;
  margin: 0 auto 40px;
  font-size: 16px;
  line-height: 1.75;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 18px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
`;

const BaseButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 12px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 13px;
  transition: all 0.3s;
`;

export const GhostButton = styled(BaseButton)`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 0 0 1px hsl(152 70% 50% / 0.2);

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primaryForeground};
  }
`;

export const CTAButton = styled(BaseButton)`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryForeground};

  &:hover {
    opacity: 0.9;
  }
`;

export const ScrollHint = styled(motion.div)`
  position: absolute;
  bottom: -80px;
  left: 50%;
  transform: translateX(-50%);
`;
