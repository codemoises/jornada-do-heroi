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
      default: "'Exo 2', sans-serif",
      secondary: "'Comic Neue', cursive",
    },
    sizes: {
      xsmall: '1rem',
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
    lteXSmall: '(max-width: 468px)',
    lteSmall: '(max-width: 506px)',
    lteMedium: '(max-width: 768px)',
    lteMediumBig: '(max-width: 966px)',
    lteMax: '(max-width: 1320px)',
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
