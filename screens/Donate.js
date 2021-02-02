import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';

import Screen from '../components/Screen';
import colors from '../config/colors';
import BloodSelector from '../components/BloodSelector';
import AppButton from '../components/AppButton';

const Donate = ({ navigation }) => {
  const [text, setText] = useState('A');
  const [num, setNum] = useState('+');

  return (
    <ScrollView>
      <Screen style={styles.container}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text style={styles.heding}>Please pick your blood type</Text>
        <Text style={styles.link}>Don't know about your blood type?</Text>
        <View style={styles.bloodSelector}>
          <BloodSelector text='A' active={text === 'A'} onPress={setText} />
          <BloodSelector text='B' active={text === 'B'} onPress={setText} />
          <BloodSelector text='O' active={text === 'O'} onPress={setText} />
          <BloodSelector text='AB' active={text === 'AB'} onPress={setText} />
        </View>
        <View style={styles.sign}>
          <BloodSelector text='+' small active={num === '+'} onPress={setNum} />
          <BloodSelector text='-' small active={num === '-'} onPress={setNum} />
        </View>
        <View style={styles.btnWrapper}>
          <AppButton title='Donate' onPress={() => navigation.navigate('Donors')} />
        </View>
      </Screen>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 10,
  },
  heding: {
    width: '80%',
    fontSize: 38,
    textAlign: 'center',
  },
  link: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
  },
  bloodSelector: {
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  sign: {
    flexDirection: 'row',
    marginTop: 10,
  },
  btnWrapper: {
    width: '90%',
    marginTop: 20,
  },
});

export default Donate;
