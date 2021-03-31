import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Images} from '../../theme';
export default function SearchBox(props) {
  const [query, setQuery] = useState('');
  const {cbQuery, cbClearList} = props;
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textField}
        placeholder="Search Issues"
        onChangeText={e => {
          setQuery(e);
        }}
      />
      <TouchableOpacity
        style={styles.cross}
        onPress={() => {
          setQuery('');
          cbClearList();
        }}>
        <Image source={Images.cross} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.done}
        onPress={() => {
          // onPress(cbData(query));
          cbQuery(query);
        }}>
        <Text>Done</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  textField: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
  },
  done: {
    borderWidth: 1,
    width: '20%',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cross: {
    position: 'absolute',
    right: 90,
    top: 10,
  },
});
