import styled from 'styled-components';

export const Container = styled.h3`
  color: ${({ theme }) => theme.paragraph};
  font-size: 24px;
  display: block;
  position: relative;
  padding: 0 0 8px 0;
  text-transform: uppercase;

  &:after {
    content: '';
    position: absolute;
    width: 80px;
    height: 4px;
    background: ${({ theme }) => theme.primary400};
    border-radius: 4px;
    left: 0;
    bottom: 0;
  }
`;
