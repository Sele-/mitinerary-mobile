import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

export default class Browser extends React.Component {

	render() {
		return(
		      <TouchableOpacity style={styles.browser} onPress={() => this.props.navigation.navigate('Cities')}>
            <Image style={styles.imageBrowser} 
             source={require('../assets/circled-right-2.png')} />
          </TouchableOpacity>
	)}}

const styles = {
	browser: {
      flex: 1,
      alignItems: 'center',
      width: '100%',
      justifyContent: 'center'

    },
    imageBrowser: {
      maxHeight: 80,
      width: '40%', 
      resizeMode: 'contain'
    }
}