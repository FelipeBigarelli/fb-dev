import styled from 'styled-components';
import { MaxWidth, Section } from '../shared/Layout';

export const SectionWrap = styled(Section)`
  .more { margin-top: 30px; text-align: center; }
`;

export const Grid = styled(MaxWidth)`
  max-width: 1100px;
  display: grid;
  gap: 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Card = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 18px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 20px;
  background:
    radial-gradient(circle at top right, hsl(193 95% 58% / 0.06), transparent 40%),
    linear-gradient(180deg, hsl(230 24% 13% / 0.82), hsl(230 20% 11% / 0.76));
  transition: transform 0.28s ease, border-color 0.28s ease, box-shadow 0.28s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: hsl(193 95% 58% / 0.22);
    box-shadow: 0 20px 45px hsl(230 60% 3% / 0.22);
  }

  h3 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 8px;
    transition: color 0.2s;
    line-height: 1.2;
  }

  &:hover h3 { color: ${({ theme }) => theme.colors.foreground}; }

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.mutedForeground};
    margin-bottom: 16px;
    flex: 1;
    line-height: 1.65;
  }

  .techs { display: flex; flex-wrap: wrap; gap: 8px; }
`;

export const CardHead = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 14px;
`;

export const CardIcon = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 28px;
  color: ${({ theme }) => theme.colors.primary};
  opacity: 0.55;
`;

export const CardLinks = styled.div`
  display: flex;
  gap: 10px;

  a {
    width: 36px;
    height: 36px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: 1px solid hsl(228 19% 22% / 0.4);
    color: ${({ theme }) => theme.colors.mutedForeground};
    background: hsl(230 18% 14% / 0.65);
    transition: all .2s;

    &:hover {
      color: ${({ theme }) => theme.colors.foreground};
      border-color: hsl(193 95% 58% / 0.25);
      transform: translateY(-1px);
    }
  }
`;

export const Tech = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 11px;
  color: hsl(220 18% 92% / 0.9);
  background: linear-gradient(180deg, hsl(230 18% 15%), hsl(230 18% 13%));
  border: 1px solid hsl(228 19% 22% / 0.5);
  padding: 6px 9px;
  border-radius: 999px;
`;

export const MoreLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.primary};
  &:hover { text-decoration: underline; }
`;
