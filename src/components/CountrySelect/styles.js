import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.paragraph};
  font-weight: bold;

  select {
    margin-top: 2px;
    padding: 0 16px;
    border: 2px solid transparent;
    border-radius: 4px;
    height: 44.5px;
    color: ${({ theme }) => theme.paragraph};
    outline-color: ${({ theme }) => theme.color.primary400};

    &:focus {
      border-radius: 4px;
      border-color: ${({ theme }) => theme.color.primary400};
    }
  }

  option {
    color: ${({ theme }) => theme.paragraph};
  }
`;
