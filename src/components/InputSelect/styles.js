import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  font-weight: bold;
  text-transform: capitalize;
  color: ${({ theme }) => theme.paragraph};

  label {
    align-self: flex-start;
  }

  select {
    width: 100%;
    height: 48px;
    padding: 0 16px;
    outline-color: ${({ theme }) => theme.color.primary400};
    background-color: ${({ theme }) => theme.backgroundSecondary};
    color: ${({ theme }) => theme.paragraph};
    border: 2px solid ${({ theme }) => theme.background};
    border-radius: 4px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  }

  select:active {
    outline: ${({ theme }) => theme.color.primary400};
    border-radius: 4px;
  }
`;
