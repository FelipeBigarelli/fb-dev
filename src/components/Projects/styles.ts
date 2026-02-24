import styled from 'styled-components';
import { MaxWidth, Section } from '../shared/Layout';

export const SectionWrap = styled(Section)`
  .more {
    margin-top: 32px;
    text-align: center;
  }
`;

export const Grid = styled(MaxWidth)`
  max-width: 1024px;
  display: grid;
  gap: 24px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Card = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 24px;
  background: hsl(222 40% 10% / 0.5);
  transition: all 0.3s;

  &:hover {
    border-color: hsl(152 70% 50% / 0.3);
    box-shadow: 0 0 0 1px hsl(152 70% 50% / 0.2);
  }

  h3 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
    transition: color 0.2s;
  }

  &:hover h3 {
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.mutedForeground};
    margin-bottom: 16px;
    flex: 1;
    line-height: 1.65;
  }

  .techs {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
`;

export const CardHead = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const CardIcon = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 32px;
  color: ${({ theme }) => theme.colors.primary};
  opacity: 0.3;
  transition: opacity 0.2s;

  ${Card}:hover & {
    opacity: 0.6;
  }
`;

export const CardLinks = styled.div`
  display: flex;
  gap: 12px;

  a {
    color: ${({ theme }) => theme.colors.mutedForeground};
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const Tech = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  color: hsl(152 70% 50% / 0.8);
`;

export const MoreLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    text-decoration: underline;
  }
`;
