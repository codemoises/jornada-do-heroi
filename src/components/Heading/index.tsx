import * as Styled from './styles';

export type HeadingProps = {
  children?: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'small' | 'medium' | 'big' | 'huge';
};

export function Heading({ children = true, as = 'h1', size = 'small'}: HeadingProps) {
  return (
    <Styled.Wrapper as={as} size={size}>
      {children}
    </Styled.Wrapper>
  );
}
