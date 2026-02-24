import styled from 'styled-components';
import { MaxWidth, Section } from '../shared/Layout';

export const SectionWrap = styled(Section)``;

export const Grid = styled(MaxWidth)`
  max-width: 1024px;
  display: grid;
  gap: 24px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Card = styled.div`
  height: 100%;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 24px;
  background: hsl(222 40% 10% / 0.5);
  transition: all 0.3s;

  &:hover {
    border-color: hsl(152 70% 50% / 0.2);
    box-shadow: 0 0 0 1px hsl(152 70% 50% / 0.2);
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.mono};
    color: ${({ theme }) => theme.colors.primary};
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  .skills {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
`;

export const Skill = styled.span`
  padding: 6px 12px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.muted};
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  transition: all 0.2s;
  cursor: default;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background: hsl(152 70% 50% / 0.1);
  }
`;
