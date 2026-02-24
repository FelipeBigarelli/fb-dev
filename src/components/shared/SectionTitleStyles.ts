import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 48px;
`;

export const Number = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  padding-left: 16px;
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 700;
  font-size: 24px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 30px;
  }
`;

export const Line = styled.div`
  flex: 1;
  height: 1px;
  background: ${({ theme }) => theme.colors.border};
  max-width: 320px;
`;
