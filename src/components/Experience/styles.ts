import styled from 'styled-components';
import { MaxWidth, Section } from '../shared/Layout';

export const SectionWrap = styled(Section)``;

export const Content = styled(MaxWidth)`
  max-width: 1100px;
  display: grid;
  gap: 18px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 260px 1fr;
    align-items: start;
  }
`;

export const TabsWrap = styled.div`
  position: sticky;
  top: 92px;

  height: -webkit-fill-available;
  align-items: center;
  display: flex;
`;

export const Tabs = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 8px;
  padding-bottom: 4px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    overflow: visible;
    gap: 6px;
  }

  button {
    padding: 12px 14px;
    text-align: left;
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 12px;
    white-space: nowrap;
    transition: all 0.2s;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 12px;
    color: ${({ theme }) => theme.colors.mutedForeground};
    background: hsl(230 20% 12% / 0.65);

    &:hover {
      color: ${({ theme }) => theme.colors.foreground};
      border-color: hsl(193 95% 58% / 0.15);
      transform: translateY(-1px);
    }

    &.active {
      color: ${({ theme }) => theme.colors.foreground};
      border-color: hsl(193 95% 58% / 0.28);
      background: linear-gradient(180deg, hsl(193 95% 58% / 0.08), hsl(274 85% 68% / 0.05));
      box-shadow: inset 0 1px 0 hsl(0 0% 100% / 0.03);
    }
  }
`;

export const Panel = styled.div`
  min-height: 280px;
  border-radius: 18px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: linear-gradient(180deg, hsl(230 24% 13% / 0.82), hsl(230 20% 11% / 0.72));
  padding: 22px;
`;

export const PanelHeader = styled.h3`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.25;
  span { color: ${({ theme }) => theme.colors.primary}; }
`;

export const PanelMeta = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.mutedForeground};
  margin-top: 8px;
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
  gap: 10px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.mutedForeground};
  line-height: 1.65;
  padding: 10px 12px;
  border-radius: 12px;
  background: hsl(230 18% 12% / 0.55);
  border: 1px solid hsl(228 19% 22% / 0.35);

  .bullet { color: ${({ theme }) => theme.colors.primary}; margin-top: 1px; flex-shrink: 0; }
`;
