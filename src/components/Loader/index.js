import React from 'react';

import {View, StyleSheet, ActivityIndicator} from 'react-native';
export default function Item(props) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="teal" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    left: 180,
    top: 300,
  },
});
