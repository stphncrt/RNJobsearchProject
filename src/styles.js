import {Dimensions, StyleSheet} from 'react-native';

export const topicItem = StyleSheet.create({
  container: {
    // backgroundColor:
    padding: 8,
    borderRadius: 6,
    margin: 5,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
});

export const Intro = StyleSheet.create({
  banner: {
    height: Dimensions.get('window').height / 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export const JobCardStyle = StyleSheet.create({
  container: {
    margin: 5,
    borderWidth: 1,
    borderRadius: 6,
  },
  textContainer: {
    margin: 5,
  },
  text: {
    fontWeight: 'bold',
  },
});

export const JobModal = StyleSheet.create({
  modalBackground: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 10,
  },
});
