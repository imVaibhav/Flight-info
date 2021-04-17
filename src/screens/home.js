import React, {useEffect} from 'react';
import {
  FlatList,
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

import Moment from 'moment';

import {useDatafetch} from '../hooks/homeHook';

import FlightCard from '../components/card';

export default HomeScreen = props => {
  const {isLoading, isError, data, refreshList} = useDatafetch();

  let previousDate = '';
  useEffect(() => {
    refreshList();
  }, []);

  const _onPressed = item => {
    // Preventing naviagation if off duty
    if (item['DutyID'] != 'DO')
      props.navigation.navigate('Details', (params = item));
  };
  const renderList = ({index}) => {
    if (previousDate == '' || previousDate != data[index].Date) {
      previousDate = data[index].Date;
      return (
        <>
          <Text style={styles.date}>{dateFormat(data[index].Date)}</Text>
          <TouchableOpacity onPress={() => _onPressed(data[index])}>
            <FlightCard item={data[index]} topBorder={true} />
          </TouchableOpacity>
        </>
      );
    } else
      return (
        <>
          <TouchableOpacity onPress={() => _onPressed(data[index])}>
            <FlightCard item={data[index]} topBorder={false} />
          </TouchableOpacity>
        </>
      );
  };

  if (isLoading)
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  else if (isError) {
    return (
      <View style={styles.error}>
        <Text style={{fontSize: 19}}>Somthing went wrong</Text>
        <TouchableHighlight
          style={styles.customButton}
          onPress={refreshList}
          underlayColor="#fff">
          <Text style={[styles.customButtonText]}>Retry</Text>
        </TouchableHighlight>
      </View>
    );
  } else {
    return (
      <View style={styles.grayBackground}>
        <FlatList
          data={data}
          keyExtractor={({id}, index) => index}
          onRefresh={refreshList}
          refreshing={isLoading}
          renderItem={renderList}
        />
      </View>
    );
  }
};

const dateFormat = date => {
  // change date format from dd/mm/yyyy to yyyy-mm-dd
  const parts = date.split('/');
  const input = parts.reverse().join('-');
  return Moment(input).format('DD MMM YYYY').toString();
};

const styles = StyleSheet.create({
  grayBackground: {
    backgroundColor: '#F1F1F1',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#A8A8A8',

    borderTopWidth: 0.7,
    borderTopColor: '#A8A8A8',
  },
  loading: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  date: {
    paddingLeft: 20,
    paddingVertical: 10,
    color: '#404040',
    fontWeight: 'bold',
    fontSize: 18,
  },
  error: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },

  customButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 20,
    backgroundColor: '#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  customButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 18,
  },
});
