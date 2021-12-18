import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FixedQuaotaContainer from './src/FixedQuotaContainer';
import SliderInput from './src/SliderInput';

const App = () => {
  const [totalAmount, setTotalAmount] = useState(19500);
  const [term, setTerm] = useState(16);

  //Limpia el valor ingresado para que solamente permita numeros
  const onTotalAmountChange = value => {
    const onlyNums = value.replace(/[^\d]/g, '');
    setTotalAmount(onlyNums);
  };

  const changeTotalAmount = value => {
    setTotalAmount(value);
  };

  const onTermChange = value => {
    const onlyNums = value.replace(/[^\d]/g, '');
    setTerm(onlyNums);
  };
  const changeTerm = value => {
    setTerm(value);
  };

  const quota = totalAmount / term;

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#084f85', '#054575', '#013c68']}
        style={styles.linearGradient}>
        <LinearGradient
          colors={['#003B66', '#003B67', '#013C68']}
          style={styles.card}>
          <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View>
              <Text style={styles.title}>Simulá tu crédito</Text>
            </View>
            <SliderInput
              value={totalAmount}
              textInputLabel={'Monto total'}
              textInputPrepend={'$'}
              textInputMaxLength={5}
              minimumValue={5000}
              maximumValue={50000}
              step={1}
              minimumValueText={'$ 5,000'}
              maximumValueText={'$ 50,000'}
              onTextInputChangeText={onTotalAmountChange}
              onSliderValueChange={changeTotalAmount}
            />
            <SliderInput
              value={term}
              textInputLabel={'Plazo'}
              textInputMaxLength={2}
              minimumValue={3}
              maximumValue={24}
              step={1}
              minimumValueText={'3'}
              maximumValueText={'24'}
              onTextInputChangeText={onTermChange}
              onSliderValueChange={changeTerm}
            />
            <FixedQuaotaContainer
              quota={isFinite(quota) ? quota.toFixed(2) : '0'}
            />
          </ScrollView>
        </LinearGradient>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  scrollViewContainer: {
    justifyContent: 'center',
    padding: 20,
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flex: 1,
    marginTop: '5%',
    width: '80%',
    height: '100%',
  },
  title: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Monserrat-Bold',
  },
});

export default App;
