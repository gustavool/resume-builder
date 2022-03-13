import styled from 'styled-components';

export const Container = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.paragraph};
  font-weight: bold;
  text-transform: capitalize;

  span {
    text-transform: none;
  }
`;

export const Input = styled.input`
  width: 100%;
  color: ${({ theme }) => theme.paragraph};
  background-color: ${({ theme }) => theme.backgroundSecondary};
  padding: 0 16px;
  border: 2px solid ${({ theme }) => theme.background};
  border-radius: 4px;
  height: 48px;
  outline: none;

  &::-webkit-calendar-picker-indicator {
    filter: invert(${(props) => (props.selectedTheme === 'light' ? '0' : '1')});
  }

  &:focus {
    border-radius: 4px;
    border-color: ${({ theme }) => theme.primary400};
  }
`;
