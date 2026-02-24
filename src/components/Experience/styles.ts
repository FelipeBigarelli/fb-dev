import styled from 'styled-components';
import { MaxWidth, Section } from '../shared/Layout';

export const SectionWrap = styled(Section)``;

export const Content = styled(MaxWidth)`
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    gap: 24px;
  }
`;

export const TabsWrap = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 260px;
  }
`;

export const Tabs = styled.div`
  display: flex;
  overflow-x: auto;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    overflow: visible;
    border-bottom: 0;
    border-left: 1px solid ${({ theme }) => theme.colors.border};
  }

  button {
    padding: 12px 16px;
    text-align: left;
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 12px;
    white-space: nowrap;
    transition: all 0.2s;
    border-bottom: 2px solid transparent;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      border-bottom: 0;
      border-left: 2px solid transparent;
      margin-left: -1px;
    }

    color: ${({ theme }) => theme.colors.mutedForeground};

    &:hover {
      color: ${({ theme }) => theme.colors.foreground};
      background: hsl(222 25% 16% / 0.3);
    }

    &.active {
      color: ${({ theme }) => theme.colors.primary};
      border-bottom-color: ${({ theme }) => theme.colors.primary};
      background: hsl(152 70% 50% / 0.05);

      @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        border-left-color: ${({ theme }) => theme.colors.primary};
        border-bottom-color: transparent;
      }
    }
  }
`;

export const Panel = styled.div`
  flex: 1;
  min-height: 280px;
`;

export const PanelHeader = styled.h3`
  font-size: 18px;
  font-weight: 600;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const PanelMeta = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.mutedForeground};
  margin-top: 4px;
  margin-bottom: 16px;
`;

export const Items = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Item = styled.li`
  display: flex;
  gap: 12px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.mutedForeground};
  line-height: 1.6;

  .bullet {
    color: ${({ theme }) => theme.colors.primary};
    margin-top: 2px;
    flex-shrink: 0;
  }
`;
