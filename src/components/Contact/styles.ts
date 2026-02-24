import styled from 'styled-components';
import { MaxWidth, Section } from '../shared/Layout';

export const SectionWrap = styled(Section)`
  text-align: center;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  margin: 0 auto 32px;
  max-width: 520px;
  line-height: 1.75;
`;

export const Buttons = styled(MaxWidth)`
  max-width: 720px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const Base = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 12px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 13px;
  transition: all 0.3s;
`;

export const EmailButton = styled(Base)`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primaryForeground};
  }
`;

export const PhoneButton = styled(Base)`
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.mutedForeground};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;
