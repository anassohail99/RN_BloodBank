import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight, Text } from 'react-native';
import { Fontisto } from '@expo/vector-icons';

import colors from '../config/colors';

const ListItem = ({ title, subtitle, image, IconComponent, onPress }) => {
  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={styles.container}>
        {IconComponent}
        {image && <Image style={styles.image} source={image} />}
        <View style={styles.detailContainer}>
          <Text style={styles.title}>{title}</Text>
          {subtitle && (
            <View style={styles.subtitleContainer}>
              <Fontisto name='blood-drop' color={colors.primary} size={20} />
              <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: colors.white,
    marginBottom: 10,
  },
  detailContainer: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: '500',
  },
  subtitle: {
    color: colors.medium,
    fontSize: 16,
    marginLeft: 5,
  },
  subtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ListItem;
