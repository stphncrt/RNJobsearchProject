import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Button, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {JobCard} from '../components';
import Modal from 'react-native-modal';
import {JobModal} from '../styles';

const Jobs = props => {
  const [data, setData] = useState([]);
  const [selectedJob, setSelectedJob] = useState('');
  const [modalFlag, setModalFlag] = useState(false);
  const {selectedLanguage} = props.route.params;

  const fetchData = async () => {
    const response = await axios.get(
      `https://jobs.github.com/positions.json?search=${selectedLanguage.toLowerCase()}`,
    );
    console.log(response);
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const displayDetails = job => {
    setModalFlag(true);
    setSelectedJob(job);
  };
  // const selectedjob = data.title;
  const renderItem = ({item}) => {
    return <JobCard job={item} onChoose={() => displayDetails(item)} />;
  };
  const onJobSave = async () => {
    let savedJobList = await AsyncStorage.getItem('@SAVED_JOBS');
    savedJobList = savedJobList == null ? [] : JSON.parse(savedJobList);
    const updatedJobList = [...savedJobList, selectedJob];
    AsyncStorage.setItem('@SAVED_JOBS', JSON.stringify(updatedJobList));
  };

  return (
    <View>
      <Text style={{fontWeight: 'bold', alignSelf: 'center', fontSize: 20}}>
        JOBS FOR {selectedLanguage.toUpperCase()}
      </Text>
      <FlatList data={data} renderItem={renderItem} />
      <TouchableOpacity
        style={{
          backgroundColor: '#26c6da',
          position: 'absolute',
          bottom: 30,
          right: 10,
          borderRadius: 10,
        }}
        onPress={props.navigation.navigate('SavedJobs')}>
        <Text
          style={{
            fontSize: 20,
            padding: 10,
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'white',
          }}>
          Show Saved
        </Text>
      </TouchableOpacity>

      <Modal isVisible={modalFlag} onBackdropPress={() => setModalFlag(false)}>
        <View style={JobModal.modalBackground}>
          <View style={{borderBottomWidth: 2, borderColor: '#bdbdbd'}}>
            <Text style={JobModal.jobtitle}>{selectedJob.title}</Text>
            <Text>{selectedJob.company}</Text>
          </View>
          <Text style={{margin: 5}} numberOfLines={5}>
            {selectedJob.description}
          </Text>
          <Button title="Save" onPress={onJobSave} />
        </View>
      </Modal>
    </View>
  );
};

export {Jobs};
