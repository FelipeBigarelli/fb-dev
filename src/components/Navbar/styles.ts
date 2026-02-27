import styled from 'styled-components';

export const Nav = styled.div<{ $scrolled: boolean }>`
  position: fixed;
  top: 14px;
  left: 12px;
  right: 12px;
  z-index: 50;
  transition: all 0.35s ease;

  ${({ $scrolled }) =>
    $scrolled
      ? `
      background: linear-gradient(180deg, hsl(230 24% 13% / 0.82), hsl(228 22% 10% / 0.75));
      backdrop-filter: blur(16px);
      border: 1px solid hsl(228 19% 22% / 0.7);
      box-shadow: 0 20px 50px rgba(0,0,0,0.28);
      border-radius: 18px;
      `
      : `
      background: hsl(230 24% 13% / 0.35);
      backdrop-filter: blur(8px);
      border: 1px solid hsl(228 19% 22% / 0.35);
      border-radius: 18px;
      `}
`;

export const NavInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 12px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const Brand = styled.button`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.foreground};
  padding: 10px 14px;
  border-radius: 12px;
  background: linear-gradient(180deg, hsl(230 24% 14%), hsl(230 22% 12%));
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: inset 0 1px 0 hsl(0 0% 100% / 0.04);

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const DesktopList = styled.ul`
  display: none;
  list-style: none;
  align-items: center;
  gap: 8px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
`;

export const NavItemButton = styled.button`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.mutedForeground};
  padding: 10px 12px;
  border-radius: 10px;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.foreground};
    background: hsl(230 22% 16% / 0.8);
    transform: translateY(-1px);
  }
`;

export const ToggleButton = styled.button`
  width: 42px;
  height: 42px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: hsl(230 22% 14% / 0.9);
  display: inline-flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.borderSoft};
  background: linear-gradient(180deg, hsl(230 24% 13% / 0.94), hsl(228 22% 10% / 0.94));
  backdrop-filter: blur(16px);
  border-radius: 0 0 18px 18px;

  ul {
    list-style: none;
    display: grid;
    gap: 6px;
    padding: 14px;
  }

  button {
    width: 100%;
    text-align: left;
  }
`;
