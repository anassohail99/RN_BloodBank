import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import AppButton from '../components/AppButton';
import AppOutlineButton from '../components/AppOutlineButton';
import colors from '../config/colors';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.round}></View>
      <View>
        <Image style={styles.logo} source={require('../assets/logo-white.png')} />
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title='Sign In'
          bgColor='white'
          textColor='primary'
          onPress={() => navigation.navigate('SignIn')}
        />
        <AppOutlineButton
          title='Create Account'
          color='white'
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
  buttonContainer: {
    padding: 20,
    width: '100%',
    position: 'absolute',
    bottom: 10,
  },
  round: {
    width: 300,
    height: 300,
    backgroundColor: '#df3f52',
    borderRadius: 150,
    position: 'absolute',
    top: -80,
    left: -150,
  },
});

export default WelcomeScreen;
