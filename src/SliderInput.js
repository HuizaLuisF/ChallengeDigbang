import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomSlider from './CustomSlider';
import CustomTextInput from './CustomTextInput';

const SliderInput = ({
  value,
  step = 1,
  textInputLabel = '',
  textInputPrepend = '',
  textInputMaxLength = 6,
  minimumValue = 0,
  maximumValue = 10,
  minimumValueText = '',
  maximumValueText = '',
  onTextInputChangeText = () => {},
  onSliderValueChange = () => {},
  ...props
}) => {
  //Se asegura de que al cambiar el valor usando el text input
  //el valor siga estando entre los limites
  const onEndEditing = event => {
    let amount = +event.nativeEvent.text;
    if (amount < minimumValue) {
      amount = minimumValue;
    } else if (amount > maximumValue) {
      amount = maximumValue;
    }

    onSliderValueChange(amount);
  };
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.label}>{textInputLabel}</Text>
        <CustomTextInput
          value={`${value}`}
          prepend={textInputPrepend}
          keyboardType="phone-pad"
          maxLength={textInputMaxLength}
          onChangeText={onTextInputChangeText}
          onEndEditing={onEndEditing}
        />
      </View>
      <CustomSlider
        value={+value}
        step={step}
        minimumValue={minimumValue}
        maximumValue={maximumValue}
        minimumValueText={minimumValueText}
        maximumValueText={maximumValueText}
        onValueChange={onSliderValueChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  label: {textTransform: 'uppercase', fontFamily: 'Monserrat-Regular'},
});

export default SliderInput;
