export const theme = {
  colors: {
    primaryColor: '#19191E',
    green: '#132719',
    white: '#FFFFFF',
    gray: '#242424',
    yellow: '#3D2C16',
    purple: '#221430',
    red: '#341515',
  },
  font: {
    family: {
      default: "'Comic Neue', cursive",
      secondary: "'Exo 2', sans-serif",
    },
    sizes: {
      xsmall: '8rem',
      small: '1.6rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '4.0rem',
      xxlarge: '4.8rem',
      huge: '5.6rem',
      xhuge: '6.4rem',
    },
  },
  media: {
    lteMedium: '(max-width: 768px)',
  },
  spacings: {
    xsmall: '8rem',
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem',
    xlarge: '4.0rem',
    xxlarge: '4.8rem',
    huge: '5.6rem',
    xhuge: '6.4rem',
  },
} as const;
