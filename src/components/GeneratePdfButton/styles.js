import { PDFDownloadLink } from '@react-pdf/renderer';
import styled from 'styled-components';

export const ButtonLinkContainer = styled(PDFDownloadLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.primary400};
  width: 100%;
  height: 48px;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  font-size: 16px;
  text-decoration: none;
  color: ${({ theme }) => theme.background};
  font-weight: bold;

  &:hover {
    background-color: ${({ theme }) => theme.primary200};
    color: ${({ theme }) => theme.paragraph};
  }
`;
