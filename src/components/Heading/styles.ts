import styled, { DefaultTheme, css } from 'styled-components';
import { HeadingProps } from '.';

const titleSize = {
  xsmall: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
  `,
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  big: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xhuge};
    ${mediaFont(theme)};
  `,
};

const mediaFont = (theme: DefaultTheme) => css`
@media ${theme.media.lteMedium} {
  font-size: ${theme.font.sizes.xlarge};
}
`;

const titleCase = (uppercase: boolean) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;


export const Wrapper = styled.h1<HeadingProps>`
  ${({ theme, size, uppercase }) => css`
  color: ${theme.colors.white};
  ${titleSize[size](theme)};
  ${titleCase(uppercase)};
  `}
`;
