import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      foreground: string;
      card: string;
      muted: string;
      mutedForeground: string;
      primary: string;
      primaryForeground: string;
      secondary: string;
      secondaryForeground: string;
      accent: string;
      accentForeground: string;
      border: string;
      glow: string;
    };

    fonts: {
      body: string;
      heading: string;
      mono: string;
    };

    layout: {
      maxWidth: string;
      sectionX: string;
    };

    radius: {
      lg: string;
    };

    breakpoints: {
      md: string;
      lg: string;
      xl: string;
    };
  }
}
