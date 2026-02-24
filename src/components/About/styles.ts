import styled from 'styled-components';
import { MaxWidth, Section } from '../shared/Layout';

export const SectionWrap = styled(Section)``;

export const Grid = styled(MaxWidth)`
  max-width: 1024px;
  display: grid;
  gap: 40px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(5, 1fr);
    gap: 48px;
  }
`;

export const Left = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-column: span 3;
  }
`;

export const Right = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-column: span 2;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  line-height: 1.85;
  margin-bottom: 16px;

  span {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }
`;

export const Card = styled.div`
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 24px;

  h3 {
    font-family: ${({ theme }) => theme.fonts.mono};
    color: ${({ theme }) => theme.colors.primary};
    font-size: 13px;
    margin-bottom: 16px;
  }
`;

export const InfoLine = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  margin-bottom: 10px;

  .label {
    color: ${({ theme }) => theme.colors.mutedForeground};
  }

  .value {
    color: ${({ theme }) => theme.colors.accentForeground};
  }

  .bool {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 14px;
  }
`;
