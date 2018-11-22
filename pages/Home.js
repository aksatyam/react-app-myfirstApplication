import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Home extends React.Component {
  render() {
    const goToFriends = () => {
        Actions.friends();
     }
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress = {goToFriends}>
            <Text>Go to Friends </Text>
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
