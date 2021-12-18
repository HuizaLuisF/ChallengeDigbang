import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Slider from '@react-native-community/slider';

const CustomSlider = ({
  value,
  step = 1,
  minimumValue = 0,
  maximumValue = 1,
  minimumValueText = '',
  maximumValueText = '',
  onValueChange = () => {},
  ...props
}) => {
  return (
    <View style={styles.container}>
      <Slider
        value={value}
        step={step}
        minimumValue={minimumValue}
        maximumValue={maximumValue}
        minimumTrackTintColor="#FFFeFF"
        maximumTrackTintColor="#FFFeFF"
        thumbTintColor="#FFFFFF"
        onValueChange={onValueChange}
      />
      <View style={styles.textContainer}>
        <Text>{minimumValueText}</Text>
        <Text>{maximumValueText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {marginTop: '4%'},
  textContainer: {flexDirection: 'row', justifyContent: 'space-between'},
});

export default CustomSlider;
