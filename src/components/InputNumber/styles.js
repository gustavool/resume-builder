import styled from 'styled-components';

export const Container = styled.label`
  width: 100%;
  display: flex;
  color: ${({ theme }) => theme.text};
  flex-direction: column;
  font-weight: bold;
  text-transform: capitalize;

  input {
    width: 100%;
    padding: 0 16px;
    border: 2px solid ${({ theme }) => theme.background};
    background-color: ${({ theme }) => theme.backgroundSecondary};
    border-radius: 4px;
    height: 48px;
    outline: none;
    color: ${({ theme }) => theme.text};

    &:focus {
      border-radius: 4px;
      border-color: ${({ theme }) => theme.primary400};
    }

    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    &[type='number'] {
      -moz-appearance: textfield;
    }
  }

  span {
    text-transform: none;
  }
`;
