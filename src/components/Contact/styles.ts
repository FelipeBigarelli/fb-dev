import styled from 'styled-components';
import { MaxWidth, Section } from '../shared/Layout';

export const SectionWrap = styled(Section)`
  text-align: center;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  margin: 0 auto 24px;
  max-width: 640px;
  line-height: 1.8;
`;

export const Buttons = styled(MaxWidth)`
  max-width: 760px;
  display: grid;
  gap: 12px;

  @media (min-width: 700px) { grid-template-columns: 1fr 1fr; }
`;

const Base = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 18px;
  border-radius: 14px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  transition: all 0.25s ease;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: linear-gradient(180deg, hsl(230 24% 13% / 0.82), hsl(230 20% 11% / 0.72));

  &:hover { transform: translateY(-2px); }
`;

export const EmailButton = styled(Base)`
  color: ${({ theme }) => theme.colors.foreground};
  border-color: hsl(193 95% 58% / 0.25);
  box-shadow: 0 12px 30px hsl(193 95% 58% / 0.08);

  &:hover {
    background: linear-gradient(135deg, hsl(193 95% 58% / 0.16), hsl(274 85% 68% / 0.12));
    border-color: hsl(193 95% 58% / 0.35);
  }
`;

export const PhoneButton = styled(Base)`
  color: ${({ theme }) => theme.colors.mutedForeground};

  &:hover {
    color: ${({ theme }) => theme.colors.foreground};
    border-color: hsl(274 85% 68% / 0.28);
  }
`;
