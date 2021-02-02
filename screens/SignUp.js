import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import Para from '../components/Para';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import colors from '../config/colors';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  fname: Yup.string().required(),
  password: Yup.string().required().min(4).label('Password'),
});

const SignUp = ({ navigation }) => {
  const handleSubmit = values => {
    console.log(values);
    navigation.navigate('Donors');
  };

  return (
    <ScrollView>
      <Screen style={styles.container}>
        <View style={styles.logoSec}>
          <Image style={styles.logo} source={require('../assets/logo-red.png')} />
          <Text style={styles.heading}>Welcome To Blood Bank</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Let's Get Started!</Text>
          <Para>Please create a new account!</Para>
        </View>
        <AppForm
          initialValues={{ email: '', password: '' }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <AppFormField
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='email-address'
            name='email'
            placeholder='Email'
            textContentType='emailAddress'
          />
          <AppFormField
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='default'
            name='fname'
            placeholder='First Name'
            textContentType='name'
          />
          <AppFormField
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='default'
            name='lname'
            placeholder='Last Name'
            textContentType='name'
          />
          <AppFormField
            autoCapitalize='none'
            autoCorrect={false}
            name='password'
            placeholder='Password'
            secureTextEntry
            textContentType='password'
          />
          <AppFormField
            autoCapitalize='none'
            autoCorrect={false}
            name='confirmPassword'
            placeholder='Confirm Password'
            secureTextEntry
            textContentType='password'
          />
          <View style={styles.buttonContainer}>
            <SubmitButton title='Sign Up' />
          </View>
        </AppForm>
      </Screen>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  logoSec: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 10,
  },
  heading: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    width: '100%',
  },
});

export default SignUp;
