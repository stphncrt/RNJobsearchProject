import React, {useState} from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SavedJobs = props => {
  const [jobList, setJobList] = useState([]);
  AsyncStorage.getItem('@SAVED_JOBS').then(res => {
    const list = JSON.parse(res);
    setJobList(list);
  });

  return (
    <View>
      <Text>Saved Job</Text>
    </View>
  );
};

export {SavedJobs};
