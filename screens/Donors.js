import React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';

const donors = [
  {
    id: '1',
    title: 'Bilal Mir',
    subtitle: 'O+',
    image: require('../assets/dp.jpg'),
  },
  {
    id: '2',
    title: 'John Doe',
    subtitle: 'AB-',
    image: require('../assets/person.jpg'),
  },
];

const Donors = ({ navigation }) => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.text}>Donors</Text>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('SignIn')}>
          <View style={styles.logout}>
            <MaterialCommunityIcons name='logout' size={20} color={colors.white} />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <FlatList
        data={donors}
        keyExtractor={listing => listing.id}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
            onPress={() => console.log(item.id)}
          />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 0,
    backgroundColor: colors.light,
  },
  text: {
    textAlign: 'center',
    color: colors.primary,
    fontSize: 20,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  logout: {
    backgroundColor: colors.primary,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Donors;
