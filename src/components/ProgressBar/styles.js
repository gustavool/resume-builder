import styled from 'styled-components';

export const Container = styled.div`
  /* background-color: ${({ theme }) => theme.color.primary400};
  width: 100%;
  height: 64px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: 2px solid ${({ theme }) => theme.color.primary400}; */

  div {
    width: 100%;
    text-align: center;
  }

  #firstBar {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-left: 2px solid ${({ theme }) => theme.color.paragraph};
  }

  #lastBar {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-right: 2px solid ${({ theme }) => theme.color.paragraph};
  }
`;

export const Bar = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${({ theme }) => theme.color.primary200};
  border-top: 2px solid ${({ theme }) => theme.color.paragraph};
  border-bottom: 2px solid ${({ theme }) => theme.color.paragraph};

  display: flex;
  align-items: center;

  div {
    height: 4.8px;
    width: 100%;
    background-color: ${({ theme }) => theme.color.primary400};
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
`;
