import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 34px;
  max-width: 1200px;
  padding: 0 24px;
  margin-left: auto;
  margin-right: auto;
`;

export const Number = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 12px;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid hsl(193 95% 58% / 0.18);
  background: hsl(230 24% 13% / 0.6);
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
  letter-spacing: -0.03em;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 32px;
  }
`;

export const Line = styled.div`
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, hsl(193 95% 58% / 0.18), ${({ theme }) => theme.colors.borderSoft}, transparent 90%);
  max-width: 380px;
`;
