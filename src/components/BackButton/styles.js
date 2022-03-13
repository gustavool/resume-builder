import styled from 'styled-components';

export const Container = styled.div`
  font-weight: bold;

  a {
    display: flex;
    flex-direction: row;
    text-decoration: none;
    color: ${({ theme }) => theme.primary400};

    svg {
      height: 18px;
      width: 18px;
      margin-right: 2px;
    }

    &:hover {
      color: ${({ theme }) => theme.paragraph};

      svg {
        fill: ${({ theme }) => theme.paragraph};
      }
    }
  }
`;
