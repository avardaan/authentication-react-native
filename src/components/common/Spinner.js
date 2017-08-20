import React, {Component} from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = (props) => {
  // if we pass prop, use it, otherwise use large spinner
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={props.size || 'large'}/>
    </View>
  )
}

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
}

export { Spinner };
