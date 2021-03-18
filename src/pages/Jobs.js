import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
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
  return (
    <View>
      <Text style={{fontWeight: 'bold', alignSelf: 'center', fontSize: 20}}>
        JOBS FOR {selectedLanguage.toUpperCase()}
      </Text>
      <FlatList data={data} renderItem={renderItem} />

      <Modal isVisible={modalFlag}>
        <View style={JobModal.modalBackground}>
          <Text>Selamlar</Text>
          <Text>{selectedJob.company}</Text>
          <Text>{selectedJob.description}</Text>
        </View>
      </Modal>
    </View>
  );
};

export {Jobs};
