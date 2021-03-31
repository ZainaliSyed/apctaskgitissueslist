/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {SafeAreaView, StyleSheet, Text, View, FlatList} from 'react-native';
import {Item, Loader, SearchBox} from './components';

import {getIssues} from './dispatch';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      issues: [],
      isLoading: false,
    };
  }

  _renderItems = ({item}) => {
    return <Item data={item} />;
  };

  render() {
    const {issues, isLoading} = this.state;
    return (
      <SafeAreaView style={{flex: 1}}>
        <Text style={styles.mainHeading}>Search Github Issues </Text>
        <SearchBox
          cbQuery={data => {
            this.setState({isLoading: true});

            getIssues(
              data,
              data => {
                this.setState({issues: data, isLoading: false});
              },
              () => {
                this.setState({isLoading: false});
              },
            );
          }}
          cbClearList={() => {
            this.setState({issues: [], isLoading: false});
          }}
        />
        <FlatList
          data={issues}
          renderItem={this._renderItems}
          ItemSeparatorComponent={() => (
            <View style={{borderColor: 'grey', borderWidth: 0.3}}></View>
          )}
          extraData={this.state.issues}
        />

        {isLoading ? <Loader /> : null}
      </SafeAreaView>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  mainHeading: {fontSize: 20, textAlign: 'center', paddingVertical: 20},
});
