import styled from 'styled-components';
import { MaxWidth, Section } from '../shared/Layout';

export const SectionWrap = styled(Section)``;

export const Grid = styled(MaxWidth)`
  max-width: 1100px;
  display: grid;
  gap: 26px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1.15fr 0.85fr;
    gap: 30px;
    align-items: start;
  }
`;

export const Left = styled.div`
  height: -webkit-fill-available;
  align-items: center;
  display: flex;
`;

export const Right = styled.div``;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  line-height: 1.9;
  margin-bottom: 14px;
  font-size: 15px;

  span { color: ${({ theme }) => theme.colors.foreground}; font-weight: 600; }
`;

export const Card = styled.div`
  border-radius: 18px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 22px;
  background: linear-gradient(180deg, hsl(230 24% 13% / 0.82), hsl(230 20% 11% / 0.78));
  backdrop-filter: blur(12px);
  box-shadow: 0 24px 50px hsl(230 60% 3% / 0.18);

  h3 {
    font-family: ${({ theme }) => theme.fonts.mono};
    color: ${({ theme }) => theme.colors.primary};
    font-size: 12px;
    margin-bottom: 14px;
    letter-spacing: .04em;
  }
`;

export const InfoLine = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  margin-bottom: 10px;
  line-height: 1.5;

  .label { color: ${({ theme }) => theme.colors.mutedForeground}; }
  .value { color: ${({ theme }) => theme.colors.foreground}; }
  .bool { color: ${({ theme }) => theme.colors.success}; }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) { font-size: 13px; }
`;
