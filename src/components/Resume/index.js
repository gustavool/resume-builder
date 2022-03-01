import {
  Text,
  // Font,
  Page,
  View,
  // Image,
  Document,
  // StyleSheet,
} from '@react-pdf/renderer';
// import { useSelector } from 'react-redux';

export default function Resume() {
  // const stepOne = useSelector((state) => state.stepOneReducer);
  // const name = stepOne.name;
  return (
    <Document>
      <Page size='A4'>
        <View>
          <Text>teste</Text>
        </View>
      </Page>
    </Document>
  );
}
