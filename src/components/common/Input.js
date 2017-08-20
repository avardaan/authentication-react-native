import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = (props) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}> {props.label} </Text>
      <TextInput
        placeholder={props.placeholder}
        style={inputStyle}
        value={props.value}
        onChangeText={props.onChangeText}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  )
}

const styles = {
  inputStyle: {
    color: '#000',
    paddingHorizontal: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  },
  labelStyle: {
    fontSize: 18,
    fontWeight: '400',
    paddingLeft: 10,
    flex: 1,
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  }
}

export { Input };
