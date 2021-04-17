import React from 'react';

import {Text, StyleSheet, View} from 'react-native';

import Segment from '../components/segment';

export default DetailsPage = props => {
  const screenParam = props.route.params;
  // {screenParam['Aircraft Type']}
  return (
    <View style={[styles.wrapper]}>
      <Text style={[styles.sectionTitle]}>Flight Info</Text>
      <View style={[styles.sectionBody]}>
        <Segment
          input={[
            {labelName: 'Flight No', value: screenParam['Flightnr']},
            {labelName: 'Type', value: screenParam['Aircraft Type']},
          ]}
        />
        <Segment
          input={[
            {labelName: 'Departure', value: screenParam['Departure']},
            {labelName: 'Destination', value: screenParam['Destination']},
          ]}
        />
        <Segment
          input={[
            {labelName: 'Departs At', value: screenParam['Time_Depart']},
            {labelName: 'Arrives At', value: screenParam['Time_Arrive']},
          ]}
        />
        <Segment
          input={[
            {labelName: 'Date', value: screenParam['Date']},
            {labelName: 'Duty code', value: screenParam['DutyCode']},
          ]}
        />
      </View>

      <Text style={[styles.sectionTitle]}>Crew</Text>
      <View style={[styles.sectionBody]}>
        <Segment
          input={[
            {labelName: 'Captain', value: screenParam['Captain']},
            {labelName: '', value: ''},
          ]}
        />
        <Segment
          input={[
            {labelName: 'First Officer', value: screenParam['First Officer']},
            {labelName: '', value: ''},
          ]}
        />
        <Segment
          input={[
            {
              labelName: 'Flight Attendant',
              value: screenParam['Flight Attendant'],
            },
            {labelName: '', value: ''},
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  divider: {
    color: '#DEDEDE',
    fontSize: 20,
  },
  attributeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#404040',
  },
  valueText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#404040',
  },
  segment: {
    // flex: 1,
  },
  wrapper: {
    backgroundColor: '#F1F1F1',
  },
  sectionTitle: {
    paddingLeft: 20,
    paddingVertical: 10,
    color: '#333333',
    fontWeight: 'bold',
    fontSize: 20,
  },
  sectionBody: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: '#DEDEDE',
    borderWidth: 1,
    marginHorizontal: 10,
    borderRadius: 10,
  },
});
