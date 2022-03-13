import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.paragraph};
  font-weight: bold;

  span {
    text-transform: none;
  }
`;

export const SelectBox = styled.div`
  width: 100%;
  border: 2px solid transparent;
  border-radius: 4px;
  height: 48px;

  &:focus-within {
    border-color: ${({ theme }) => theme.primary400};
  }

  select {
    width: 100%;
    height: 100%;
    padding: 0 10px;
    outline: none;
    border: 2px solid transparent;
    background-color: ${({ theme }) => theme.backgroundSecondary};
    border-radius: 2px;
    color: ${({ theme }) => theme.text};

    option {
      color: ${({ theme }) => theme.text};
    }
  }
`;
