import styled from 'styled-components';

export const FooterWrap = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 32px 24px;
  text-align: center;

  .icons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-bottom: 12px;
  }
`;

export const IconLink = styled.a`
  color: ${({ theme }) => theme.colors.mutedForeground};
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.mutedForeground};
`;
