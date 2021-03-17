import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import axios from 'axios';
import {JobCard} from '../components';

const Jobs = props => {
  const [data, setData] = useState([]);
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

  const renderItem = ({item}) => {
    return <JobCard job={item} />;
  };
  return (
    <View>
      <Text style={{fontWeight: 'bold', alignSelf: 'center', fontSize: 20}}>
        JOBS FOR {selectedLanguage.toUpperCase()}
      </Text>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};

export {Jobs};
