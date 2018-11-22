import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Friends extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       <TouchableOpacity>
            <Text>Welcome to Friends Page</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
