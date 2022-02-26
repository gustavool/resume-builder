import Select from 'react-select';
import styled from 'styled-components';

export const Container = styled.div`
  color: ${({ theme }) => theme.paragraph};
  font-weight: bold;
`;

export const ReactSelect = styled(Select)`
  .react-select__control {
    border-radius: 4px;
    border: 2px solid transparent;
    box-shadow: none;
    padding: 2px;

    font-weight: 400;
  }

  /* .react-select__control-:hover {
    border-color: none;
  } */

  .react-select__control--is-focused {
    border: 2px solid ${({ theme }) => theme.color.primary400};
    box-shadow: ${({ theme }) => theme.color.primary400};
  }

  .react-select__control:hover {
    border-color: white;
  }

  .react-select__control--menu-is-open:hover {
    border: 2px solid ${({ theme }) => theme.color.primary400};
    box-shadow: ${({ theme }) => theme.color.primary400};
  }

  .react-select__indicator-separator {
    display: none;
  }

  .react-select__indicator svg {
    fill: ${({ theme }) => theme.color.primary400};
  }

  .react-select__option:hover {
    background-color: ${({ theme }) => theme.color.primary200};
  }

  .react-select__option--is-selected {
    background-color: ${({ theme }) => theme.color.primary200};
  }

  .react-select__value-container,
  .react-select__option {
    font-size: 14px;
    font-weight: 400;
  }
`;
