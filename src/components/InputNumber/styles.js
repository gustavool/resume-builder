import styled from 'styled-components';

export const Container = styled.label`
  display: flex;
  flex-direction: column;

  color: ${({ theme }) => theme.paragraph};
  font-weight: bold;
  text-transform: capitalize;

  input {
    padding: 0 16px;
    border: 2px solid ${({ theme }) => theme.background};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    border-radius: 4px;
    height: 48px;
    outline: none;

    &:focus {
      border-radius: 4px;
      border-color: ${({ theme }) => theme.color.primary400};
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
`;
