import React from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';

const CustomTextInput = ({
  value,
  prepend = null,
  maxLength,
  showBorder = true,
  onChangeText = () => {},
  onEndEditing = () => {},
  ...props
}) => {
  return (
    <View style={showBorder ? styles.containerWithBorder : styles.container}>
      {prepend ? <Text style={styles.prepend}>{prepend}</Text> : null}
      <TextInput
        value={value}
        keyboardType="phone-pad"
        textAlign={'center'}
        maxLength={maxLength}
        onChangeText={onChangeText}
        onEndEditing={onEndEditing}
        style={styles.textInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  containerWithBorder: {
    borderWidth: 1,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '40%',
  },
  textInput: {
    paddingVertical: 0,
    fontWeight: 'bold',
    flex: 5,
    fontFamily: 'Monserrat-Bold',
  },
  prepend: {
    fontWeight: 'bold',
    color: '#FFFFFF',
    flex: 1,
    textAlign: 'right',
  },
});

export default CustomTextInput;
