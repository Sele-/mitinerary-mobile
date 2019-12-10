import React from 'react'
import {Text, View} from 'react-native'

export default class Login extends React.Component {
	static navigationOptions = {
    title: 'Login'
  }
	render() {
		return (
			<View style={styles.loginContainer}>
			<Text style={styles.text}>Soy Login</Text>
			</View>)
	}
}

const styles = {
	loginContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		fontSize: 50
	}
}