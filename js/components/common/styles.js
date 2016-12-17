import { PixelRatio, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 0
  },
  row: {
    padding: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: '#CDCDCD',
  },
  rowText: {
    fontSize: 17,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '500',
  },
});

export default styles;