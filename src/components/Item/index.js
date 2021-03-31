import React, {
  useRef,
  useCallback,
  useState,
  useContext,
  Fragment,
  useEffect,
} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
export default function Item(props) {
  const {data} = props;
  return (
    <View style={styles.container}>
      <Image
        source={{uri: data.user.avatar_url}}
        style={styles.userLogo}
        resizeMode="contain"
      />
      <View style={{width: '75%'}}>
        <Text style={styles.title} numberOfLines={1}>
          {' '}
          {data.title}
        </Text>
        <Text style={{fontSize: 10}} numberOfLines={3}>
          {' '}
          {data.body}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    flexDirection: 'row',
    marginVertical: 10,
  },
  userLogo: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 20,
    paddingVertical: 10,
  },
});
