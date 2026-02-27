import styled from 'styled-components';
import { MaxWidth, Section } from '../shared/Layout';

export const SectionWrap = styled(Section)``;

export const Grid = styled(MaxWidth)`
  max-width: 1100px;
  display: grid;
  gap: 16px;

  @media (min-width: 640px) { grid-template-columns: repeat(2, 1fr); }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) { grid-template-columns: repeat(3, 1fr); }
`;

export const Card = styled.div`
  height: 100%;
  border-radius: 18px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 18px;
  background: linear-gradient(180deg, hsl(230 24% 13% / 0.78), hsl(230 20% 11% / 0.72));
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: hsl(193 95% 58% / 0.2);
    box-shadow: 0 18px 38px hsl(230 60% 3% / 0.18);
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.mono};
    color: ${({ theme }) => theme.colors.primary};
    font-size: 12px;
    margin-bottom: 14px;
  }

  .skills { display: flex; flex-wrap: wrap; gap: 8px; }
`;

export const Skill = styled.span`
  padding: 7px 10px;
  border-radius: 10px;
  background: hsl(230 18% 15% / 0.8);
  border: 1px solid hsl(228 19% 22% / 0.45);
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 11px;
  transition: all 0.2s;
  cursor: default;

  &:hover {
    color: ${({ theme }) => theme.colors.foreground};
    border-color: hsl(193 95% 58% / 0.25);
    background: hsl(193 95% 58% / 0.08);
  }
`;
