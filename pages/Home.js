import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Header from '../components/Header'
import Browser from '../components/Browser'
import Menu from '../components/Menu'
import Carousel from '../components/Carousel'


export default class Home extends React.Component {
  // static navigationOptions = {
  //   title: 'Home'
  // }

    render() {
    const {navigation} = this.props

        return (
      <View style={styles.container}>
        <View style={styles.appContainer}>
          <Menu navigation={navigation} />
          <Header />
          <Browser navigation={navigation}/>
          <Carousel />
        </View>
      </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'red',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    appContainer: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '93%',
        width: '95%',
        backgroundColor: '#fff'
    },
     
});