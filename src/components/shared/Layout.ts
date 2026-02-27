import styled from 'styled-components';

export const MaxWidth = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding-left: 24px;
  padding-right: 24px;
`;

export const Section = styled.section`
  position: relative;
  padding: 72px 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 92px 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 108px 0;
  }
`;
