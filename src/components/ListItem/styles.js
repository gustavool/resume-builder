import styled from 'styled-components';

export const Container = styled.ul`
  width: 100%;
  color: ${({ theme }) => theme.primary400};
  font-weight: bold;
  text-transform: uppercase;
  list-style-type: none;

  span {
    color: ${({ theme }) => theme.primary400};
  }

  li {
    position: relative;
    margin-top: 8px;
    font-weight: bold;
    color: ${({ theme }) => theme.paragraph};
    padding-bottom: 4px;
    text-transform: capitalize;

    &:after {
      content: '';
      position: absolute;
      width: 64px;
      height: 2px;
      background: ${({ theme }) => theme.primary400};
      border-radius: 4px;
      left: 0;
      bottom: 0;
    }
  }

  li + li {
    margin-top: 16px;
  }
`;
