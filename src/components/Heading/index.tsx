import * as Styled from './styles';

export type HeadingProps = {
  title?: string;
};

export function Heading({ title = 'Heading' }: HeadingProps) {
  return (
    <Styled.Wrapper>
      <h1>{title}</h1>
    </Styled.Wrapper>
  );
}
