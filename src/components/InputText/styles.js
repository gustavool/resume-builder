import styled from 'styled-components';

export const Container = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;

  color: ${({ theme }) => theme.paragraph};
  font-weight: bold;
  text-transform: capitalize;

  div {
    display: flex;
    align-items: center;

    small {
      font-size: 12px;
      text-transform: none;
      margin-left: 4px;
      color: ${({ theme }) => theme.primary400};
    }
  }

  span {
    text-transform: none;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  border: 2px solid ${({ theme }) => theme.background};
  border-radius: 4px;
  height: 48px;
  outline: none;
  color: ${({ theme }) => theme.text};

  &:focus {
    border-radius: 4px;
    border-color: ${({ theme }) => theme.primary400};
  }
`;
