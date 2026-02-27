import styled from 'styled-components';

export const FooterWrap = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.borderSoft};
  margin-top: 28px;
  padding: 26px 24px 36px;
  text-align: center;

  .icons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-bottom: 12px;
  }
`;

export const IconLink = styled.a`
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: hsl(230 22% 13% / 0.7);
  color: ${({ theme }) => theme.colors.mutedForeground};
  transition: all 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.foreground};
    border-color: hsl(193 95% 58% / 0.25);
    transform: translateY(-2px);
  }
`;

export const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 11px;
  color: ${({ theme }) => theme.colors.mutedForeground};
`;
