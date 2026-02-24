import styled from 'styled-components';

export const MaxWidth = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding-left: 24px;
  padding-right: 24px;
`;

export const Section = styled.section`
  padding: 80px 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 96px 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 120px 0;
  }
`;
