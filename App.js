
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Transaction from './screens/transaction'
import Search from './screens/search'
import {createBottomTabNavigator} from "react-navigation-tabs";
import {createAppContainer}from "react-navigation";

export default class App extends React.Component{
  render(){
  return (
    <AppContainer/>
  );
  }
}
const tabNavigator= createBottomTabNavigator({
  Transaction:Transaction,
  Search:Search
})
const AppContainer= createAppContainer(tabNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
