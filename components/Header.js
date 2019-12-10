import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default class Header extends React.Component {
	render() {
		return(
		<View style={styles.header}>
        	<Image style={styles.image} source={require('../assets/MYtineraryLogo.png')} />
        	<Text style={styles.text}>Find your perfect trip, designed by insiders who know and love their cities</Text>
        </View>
	)}}

const styles = {
	header: {
        width: '100%',
        flex: 1,
        justifyContent: 'center'
    },
    image: {
      width: '100%', 
      maxHeight: 130, 
      resizeMode: 'contain'
    },
    text: {
       textAlign: 'center', 
       fontSize: 18,
       width: '90%',
       marginLeft: 'auto',
       marginRight: 'auto'
    }
}