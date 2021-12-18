import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const CustomButton = ({
  title,
  backgroundColor = '#17aa8d',
  onPress = () => {},
  containerStyle = {},
  textStyle = {},
  ...props
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity style={[styles.touchable, {backgroundColor}]}>
        <Text style={[styles.title, textStyle]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexShrink: 1,
  },
  touchable: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    flexShrink: 1,
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    flexShrink: 1,
    textAlign: 'center',
    fontSize: 13,
    fontFamily: 'Monserrat-Bold',
  },
});

export default CustomButton;
