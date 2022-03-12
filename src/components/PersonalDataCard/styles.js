import styled from 'styled-components';

export const Container = styled.section`
  border: 4px solid ${({ theme }) => theme.color.primary400};
  background-color: ${({ theme }) => theme.backgroundSecondary};
  border-radius: 4px;
  padding: 8px;

  width: 100%;
  height: 120px;

  display: flex;
  flex-direction: column;

  div {
    flex-direction: row;

    p {
      width: 50%;
    }
  }

  a {
    font-size: 12px;
    align-self: flex-end;
  }

  h2 {
    color: ${({ theme }) => theme.head};
    font-size: 16px;
    margin-bottom: 8px;
    border-bottom: 2px solid ${({ theme }) => theme.color.primary400};
  }

  p {
    font-size: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    strong {
      color: ${({ theme }) => theme.paragraph};
      font-weight: bold;
    }
  }

  a {
    margin: 0;
  }
`;
