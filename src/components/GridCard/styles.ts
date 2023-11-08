import styled, { css } from 'styled-components';

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: ${theme.spacings.large};
    counter-reset: grid-counter;
    margin: 0 10px;

    @media ${theme.media.lteMax} {
      grid-template-columns: repeat(5, 1fr);
    }
    @media ${theme.media.lteMediumBig} {
      grid-template-columns: repeat(3, 1fr);
    }
    @media ${theme.media.lteSmall} {
      grid-template-columns: repeat(2, 1fr);
    }
    @media ${theme.media.lteXSmall} {
      grid-template-columns: repeat(1, 1fr);
    }
  `}
`;
