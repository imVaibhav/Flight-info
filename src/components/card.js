import React from 'react';

import {Text, StyleSheet, View} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faPlane,
  faSuitcase,
  faClipboard,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';

export const FlightCard = props => {
  let fontAweIcon = faPlane;
  let title = '';
  let bottomLeftLable = '';
  let topRightLable = '';
  let bottomRightLable = '';

  if (props.item['DutyID'] == 'FLT') {
    fontAweIcon = faPlane;
    title = props.item['Departure'] + ' - ' + props.item['Destination'];
    bottomLeftLable = '';
    topRightLable = '';
    bottomRightLable =
      props.item['Time_Depart'] + ' - ' + props.item['Time_Arrive'];
  } else if (props.item['DutyID'] == 'SBY') {
    fontAweIcon = faClipboard;
    title = 'Standby';
    bottomLeftLable =
      props.item['DutyID'] + ' (' + props.item['Departure'] + ')';
    topRightLable = 'Match Crew';
    bottomRightLable =
      timeFormat(props.item['Time_Depart']) +
      ' - ' +
      timeFormat(props.item['Time_Arrive']);
  } else if (props.item['DutyID'] == 'OFD') {
    fontAweIcon = faSuitcase;
    title = 'Layover';
    bottomLeftLable = props.item['Departure'];
    topRightLable = '';
    bottomRightLable = props.item['Time_Arrive'] + ' hours';
  } else if (props.item['DutyID'] == 'POS') {
    fontAweIcon = faMapMarkerAlt;
    title = 'Positioning';
    bottomLeftLable =
      props.item['Departure'] + ' - ' + props.item['Destination'];
    topRightLable = props.item['Flightnr'];
    bottomRightLable =
      timeFormat(props.item['Time_Depart']) +
      ' - ' +
      timeFormat(props.item['Time_Arrive']);
  } else {
    // For OFF

    fontAweIcon = faHome;
    title = 'Off';
    bottomLeftLable = '';
    topRightLable = '';
    bottomRightLable = '';
  }

  if (props.item['DutyID'] == 'DO') {
    return (
      <View
        style={[
          props.topBorder ? {borderTopWidth: 1} : {borderTopWidth: 0},
          styles.row,
        ]}>
        <View style={{flex: 1}}>
          <Text style={styles.icon}>
            <FontAwesomeIcon icon={fontAweIcon} size={40} color={'#353E47'} />
          </Text>
        </View>
        <View
          style={{
            flex: 4,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={styles.column}>
            <Text style={styles.heroLabel}>{'OFF'}</Text>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View
      style={[
        props.topBorder ? {borderTopWidth: 1} : {borderTopWidth: 0},
        styles.row,
      ]}>
      <View style={{flex: 1}}>
        <Text style={styles.icon}>
          {fontAweIcon == faPlane ? (
            <FontAwesomeIcon
              icon={fontAweIcon}
              size={40}
              color={'#353E47'}
              style={{transform: [{rotate: '-45deg'}]}}
            />
          ) : (
            <FontAwesomeIcon icon={fontAweIcon} size={40} color={'#353E47'} />
          )}
        </Text>
      </View>
      <View
        style={{
          flex: 4,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={styles.column}>
          <Text style={styles.heroLabel}>{title}</Text>

          <Text style={[styles.text, styles.grayText]}>{bottomLeftLable}</Text>
        </View>

        <View
          style={
            (styles.column,
            {alignItems: 'flex-end', justifyContent: 'space-evenly'})
          }>
          <Text style={[styles.text, styles.grayText]}>{topRightLable}</Text>

          <Text style={[styles.text, styles.redText]}>{bottomRightLable}</Text>
        </View>
      </View>
    </View>
  );
};

const timeFormat = time => {
  const parts = time.split(':');
  return parts[0] + ':' + parts[1];
};

const styles = StyleSheet.create({
  heroLabel: {
    color: '#404040',
    fontWeight: 'bold',
    fontSize: 20,
  },
  text: {
    fontSize: 18,
  },
  redText: {
    color: '#A13534',
  },
  grayText: {
    color: '#A0A0A0',
  },
  row: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DEDEDE',
    borderTopColor: '#DEDEDE',
    height: 'auto',
    borderBottomWidth: 1,
  },
  column: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
  },

  icon: {
    paddingLeft: 25,
    paddingEnd: 20,
    paddingVertical: 10,
    color: '#404040',
    // paddingTop: 10,
  },
});

export default FlightCard;
