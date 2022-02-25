import Select from 'react-select';
import styled from 'styled-components';

export const ReactSelect = styled(Select)`
  .react-select__control {
    border: 2px solid transparent;
    box-shadow: none;
  }

  /* .react-select__control-:hover {
    border-color: none;
  } */

  .react-select__control--is-focused {
    border: 2px solid ${({ theme }) => theme.color.primary200};
    box-shadow: ${({ theme }) => theme.color.primary200};
  }

  .react-select__control:hover {
    border-color: white;
  }

  .react-select__control--menu-is-open:hover {
    border: 2px solid ${({ theme }) => theme.color.primary200};
    box-shadow: ${({ theme }) => theme.color.primary200};
  }

  .react-select__indicator-separator {
    display: none;
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
  }
`;
