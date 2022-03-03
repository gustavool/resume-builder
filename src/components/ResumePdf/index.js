import { Text, Page, Document } from '@react-pdf/renderer';
import PropTypes from 'prop-types';

import styles from './styles';

export default function ResumePdf({ data }) {
  console.log('styles', styles);

  return (
    <Document>
      <Page size='A4' style={styles.body}>
        <Text style={styles.title}>PERSONAL DATA</Text>
        <Text style={styles.text}>
          Name: {data.stepOne.firstName} {data.stepOne.lastName}
        </Text>
        <Text style={styles.text}>Age: {data.stepOne.age}</Text>
        <Text style={styles.text}>Gender: {data.stepOne.gender}</Text>
        <Text style={styles.text}>Email: {data.stepOne.email}</Text>

        <Text style={styles.title}>LOCATION</Text>
        <Text style={styles.text}>
          Address: {data.stepTwo.number}, {data.stepTwo.address}
        </Text>
        <Text style={styles.text}>
          {data.stepTwo.city} - {data.stepTwo.state} - {data.stepTwo.country}
        </Text>

        <Text style={styles.title}>WORK EXPERIENCE</Text>
        <Text style={styles.text}>
          Occupation: {data.stepThree.occupation} in {data.stepThree.employer}
        </Text>
        <Text style={styles.text}>
          Period: {data.stepThree.startDate} - {data.stepThree.endDate}
        </Text>
        <Text style={styles.text}>Activities: {data.stepThree.activities}</Text>

        <Text style={styles.title}>EDUCATION</Text>
        <Text style={styles.text}>Course name: {data.stepFour.name}</Text>
        <Text style={styles.text}>
          College or school: {data.stepFour.collegeSchool}
        </Text>
        <Text style={styles.text}>
          Period: {data.stepFour.startDate} - {data.stepFour.endDate}
        </Text>
        <Text style={styles.text}>Activities: {data.stepFour.activities}</Text>

        <Text style={styles.title}>CERTIFICATION</Text>
        <Text style={styles.text}>Name: {data.stepFive.name}</Text>
        <Text style={styles.text}>Date: {data.stepFive.date}</Text>
        <Text style={styles.text}>Link: {data.stepFive.linkUrl}</Text>
        <Text style={styles.text}>
          Description: {data.stepFive.description}
        </Text>

        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) => {
            return `${pageNumber} / ${totalPages}`;
          }}
          fixed
        />
      </Page>
    </Document>
  );
}

ResumePdf.propTypes = {
  data: PropTypes.shape({
    stepOne: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      age: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }),
    stepTwo: PropTypes.shape({
      address: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    }),
    stepThree: PropTypes.shape({
      occupation: PropTypes.string.isRequired,
      employer: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      activities: PropTypes.string.isRequired,
    }),
    stepFour: PropTypes.shape({
      name: PropTypes.string.isRequired,
      collegeSchool: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      activities: PropTypes.string.isRequired,
    }),
    stepFive: PropTypes.shape({
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      linkUrl: PropTypes.string,
      description: PropTypes.string.isRequired,
    }),
  }),
};
