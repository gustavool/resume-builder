import { StyleSheet } from '@react-pdf/renderer';

export default StyleSheet.create({
  body: {
    background: '#eff0f3',
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 18,
    textAlign: 'left',
    marginTop: 16,
    color: '#f25f4c',
    borderBottom: '2px solid #f25f4c',
  },

  field: {
    color: '#0d0d0d',
    fontWeight: 'bold',
  },

  text: {
    color: '#0d0d0d',
    margin: 4,
    fontSize: 14,
    textAlign: 'justify',
  },

  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 0,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
    minHeight: '30px', // it is very important to set the "minHeight"
  },
});
