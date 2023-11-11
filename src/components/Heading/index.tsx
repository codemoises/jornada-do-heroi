import * as Styled from './styles';

export type HeadingProps = {
  children?: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'xsmall' | 'small' | 'medium' | 'big' | 'huge';
  uppercase?: boolean;
};

export function Heading({ children = true, as = 'h1', size = 'small', uppercase = true}: HeadingProps) {
  return (
    <Styled.Wrapper as={as} size={size} uppercase={uppercase}>
      {children}
    </Styled.Wrapper>
  );
}
