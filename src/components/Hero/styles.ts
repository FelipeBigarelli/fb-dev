import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.section`
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-top: 90px;
`;

export const BackgroundImage = styled.div`
  position: absolute;
  inset: -8%;
  background-size: cover;
  background-position: center;
  opacity: 0.15;
  transform: scale(1.05);
  filter: saturate(0.8) contrast(1.05);
`;

export const BackgroundOverlay = styled.div`
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 15% 25%, hsl(193 95% 58% / 0.18), transparent 38%),
    radial-gradient(circle at 85% 15%, hsl(274 85% 68% / 0.16), transparent 38%),
    linear-gradient(to bottom, hsl(228 32% 7% / 0.48), hsl(228 32% 7% / 0.78), hsl(228 32% 7%));
`;

export const GridGlow = styled(motion.div)`
  position: absolute;
  inset: 8% 5% auto 5%;
  height: 60%;
  border-radius: 32px;
  background:
    linear-gradient(hsl(0 0% 100% / 0.03) 1px, transparent 1px),
    linear-gradient(90deg, hsl(0 0% 100% / 0.03) 1px, transparent 1px);
  background-size: 32px 32px;
  mask-image: radial-gradient(circle at center, black 48%, transparent 100%);
  pointer-events: none;
`;

export const FloatingOrb = styled(motion.div)<{ $variant?: 'a' | 'b' | 'c' }>`
  position: absolute;
  border-radius: 999px;
  filter: blur(12px);
  opacity: 0.16;
  pointer-events: none;

  ${({ $variant, theme }) => {
    if ($variant === 'b') return `width: 220px; height: 220px; right: 8%; top: 20%; background: ${theme.colors.accent};`;
    if ($variant === 'c') return `width: 180px; height: 180px; left: 14%; bottom: 14%; background: ${theme.colors.success};`;
    return `width: 260px; height: 260px; left: 6%; top: 18%; background: ${theme.colors.primary};`;
  }}
`;

export const Container = styled.div`
  position: relative;
  z-index: 10;
  max-width: 980px;
  margin: 0 auto;
  padding: 0 24px;
  text-align: center;
`;

export const Badge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 18px;
  padding: 8px 14px;
  border-radius: 999px;
  border: 1px solid hsl(193 95% 58% / 0.18);
  background: hsl(230 24% 13% / 0.65);
  backdrop-filter: blur(12px);
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.mutedForeground};

  span.dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.success};
    box-shadow: 0 0 0 4px hsl(151 72% 49% / 0.13);
  }
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 700;
  line-height: 0.95;
  letter-spacing: -0.03em;
  font-size: clamp(40px, 8vw, 78px);
  margin-bottom: 14px;
`;

export const Subtitle = styled.h2`
  font-size: clamp(18px, 3vw, 30px);
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: 22px;
  opacity: 0.9;
`;

export const Lead = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  max-width: 700px;
  margin: 0 auto 34px;
  font-size: 16px;
  line-height: 1.85;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 18px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
`;

const BaseButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 13px 18px;
  border-radius: 14px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  font-weight: 500;
  transition: all 0.25s ease;
  border: 1px solid transparent;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const GhostButton = styled(BaseButton)`
  border-color: ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.foreground};
  background: hsl(230 24% 13% / 0.72);

  &:hover {
    border-color: hsl(193 95% 58% / 0.28);
    box-shadow: 0 10px 28px hsl(193 95% 58% / 0.08);
  }
`;

export const CTAButton = styled(BaseButton)`
  color: white;
  background: linear-gradient(135deg, hsl(193 95% 58%), hsl(274 85% 68%));
  box-shadow: 0 16px 32px hsl(193 95% 58% / 0.18);

  &:hover {
    box-shadow: 0 18px 36px hsl(193 95% 58% / 0.25), 0 12px 30px hsl(274 85% 68% / 0.12);
  }
`;

export const MiniStats = styled(motion.div)`
  margin: 30px auto 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  max-width: 720px;

  padding-bottom: 32px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div`
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid ${({ theme }) => theme.colors.borderSoft};
  background: linear-gradient(180deg, hsl(230 24% 13% / 0.75), hsl(230 20% 11% / 0.7));
  backdrop-filter: blur(12px);

  strong {
    display: block;
    font-size: 15px;
    color: ${({ theme }) => theme.colors.foreground};
    margin-bottom: 4px;
  }

  span {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 11px;
    color: ${({ theme }) => theme.colors.mutedForeground};
  }
`;

export const ScrollHint = styled(motion.div)`
  position: absolute;
  bottom: -60px;
  left: 50%;
  transform: translateX(-50%);
`;
