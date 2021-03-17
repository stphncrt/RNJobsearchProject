import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import {TopicItem} from '../components/';

const topic = [
  {
    id: 0,
    name: 'Java',
    color: 'fb5607',
  },
  {
    id: 1,
    name: 'Pyhon',
    color: '007f5f',
  },
  {
    id: 2,
    name: 'JavaScript',
    color: 'ffb703',
  },
  {
    id: 3,
    name: '.NET',
    color: '023e7d',
  },
  {
    id: 4,
    name: 'Dart',
    color: '009688',
  },
  {
    id: 5,
    name: 'Go',
    color: 'fb5607',
  },
  {
    id: 6,
    name: 'Ruby',
    color: '00bcd4',
  },
  {
    id: 7,
    name: 'C',
    color: 'ff9800',
  },
  {
    id: 8,
    name: 'C++',
    color: 'c0ca33',
  },
];
const Introduction = props => {
  return (
    <View>
      <Text>Introduction</Text>
      <ScrollView>
        {topic.map(topic => (
          <TopicItem key={topic.id} item={topic} />
        ))}
      </ScrollView>
    </View>
  );
};

export {Introduction};
