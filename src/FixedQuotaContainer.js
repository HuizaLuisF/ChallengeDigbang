import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomButton from './CustomButton';

const FixedQuaotaContainer = ({
  quota = '',
  onGetCreditPress = () => {},
  onViewDetailsPress = () => {},
  ...props
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.quotaContainer}>
        {/* <View> */}
        <Text style={styles.title}>Cuota fija por mes</Text>
        {/* </View> */}
        <View style={styles.quotaTextContainer}>
          <Text style={styles.quotaText}>${quota}</Text>
        </View>
      </View>
      {/* buttons */}
      <View style={styles.buttonContainer}>
        <CustomButton
          title="OBTENÉ CRÉDITO"
          containerStyle={styles.getCreditButtonContainer}
          onPress={onViewDetailsPress}
        />
        <View style={styles.separator} />
        <CustomButton
          title="VER DETALLES DE CUOTAS"
          backgroundColor="#0b538b"
          textStyle={styles.viewDetailsButtonText}
          containerStyle={styles.viewDetailsButtonContainer}
          onPress={onViewDetailsPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#034372',
    flexShrink: 1,
    marginVertical: 20,
  },
  quotaContainer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  buttonContainer: {flexDirection: 'row', flex: 1},
  title: {
    textTransform: 'uppercase',
    fontSize: 11,
    flexShrink: 1,
    fontFamily: 'Monserrat-Bold',
  },
  quotaTextContainer: {
    width: '48%',
    alignItems: 'flex-end',
  },
  quotaText: {fontWeight: 'bold'},
  getCreditButtonContainer: {flex: 7},
  viewDetailsButtonText: {fontSize: 10},
  viewDetailsButtonContainer: {flex: 5},
  separator: {flex: 1},
});

export default FixedQuaotaContainer;
