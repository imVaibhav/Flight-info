import React from 'react';

import {Text, StyleSheet, View} from 'react-native';

export default Segment = props => {
  const data = props.input;

  return (
    <View style={[styles.row]}>
      <View style={[styles.segment]}>
        <Text style={[styles.attributeText]}>
          {data[0].labelName}:{' '}
          <Text style={[styles.valueText]}>
            {data[0].value != '' ? data[0].value : 'Unknown'}
          </Text>
        </Text>
      </View>

      {data[1].labelName != '' ? (
        <View style={[styles.segment]}>
          <Text style={[styles.attributeText]}>
            {data[1].labelName}:{' '}
            <Text style={[styles.valueText]}>
              {data[1].value != '' ? data[1].value : 'Unknown'}
            </Text>
          </Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
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
    flex: 1,
  },
});
