import styled from 'styled-components';

export const Nav = styled.div<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  transition: all 0.3s;

  ${({ $scrolled }) => ($scrolled ? 'background: hsl(222 40% 10% / 0.7); backdrop-filter: blur(12px); border-bottom: 1px solid hsl(222 20% 18% / 0.5); box-shadow: 0 10px 25px rgba(0,0,0,0.25);' : 'background: transparent; border-bottom: 1px solid transparent;')}
`;

export const NavInner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Brand = styled.button`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

export const DesktopList = styled.ul`
  display: none;
  list-style: none;
  align-items: center;
  gap: 32px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
`;

export const NavItemButton = styled.button`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.mutedForeground};
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ToggleButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background: hsl(222 40% 10% / 0.7);
  backdrop-filter: blur(12px);

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 24px 0;
  }

  button {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 13px;
    color: ${({ theme }) => theme.colors.mutedForeground};

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
