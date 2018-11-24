import React from 'react';
import {StyleSheet, Text, View, FlatList, Platform} from 'react-native';

export default class Friends extends React.Component {
  render() {
    return (
        <FlatList
          data={[
            {firstName: 'Devin', lastName: 'Test'},
            {firstName: 'Jackson', lastName: 'Test'},
            {firstName: 'James', lastName: 'Test'},
            {firstName: 'Joel', lastName: 'Test'},
            {firstName: 'John', lastName: 'Test'},
            {firstName: 'Jillian', lastName: 'Test'},
            {firstName: 'Jimmy', lastName: 'Test'},
            {firstName: 'Julie', lastName: 'Test'},
            {firstName: 'Devin', lastName: 'Test'},
            {firstName: 'Jackson', lastName: 'Test'},
            {firstName: 'James', lastName: 'Test'},
            {firstName: 'Joel', lastName: 'Test'},
            {firstName: 'John', lastName: 'Test'},
            {firstName: 'Jillian', lastName: 'Test'},
            {firstName: 'Jimmy', lastName: 'Test'},
            {firstName: 'Julie', lastName: 'Test'},
            {firstName: 'Devin', lastName: 'Test'},
            {firstName: 'Jackson', lastName: 'Test'},
            {firstName: 'James', lastName: 'Test'},
            {firstName: 'Joel', lastName: 'Test'},
            {firstName: 'John', lastName: 'Test'},
            {firstName: 'Jillian', lastName: 'Test'},
            {firstName: 'Jimmy', lastName: 'Test'},
            {firstName: 'Julie', lastName: 'Test'},
            {firstName: 'Devin', lastName: 'Test'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.firstName} {' '}{item.lastName}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
   },
   item: {
     padding: 10,
     fontSize: 18,
     height: 44,
   },
});
