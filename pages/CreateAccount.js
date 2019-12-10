import React from 'react'
import {Text, View} from 'react-native'

export default class CreateAccount extends React.Component {
	static navigationOptions = {
    title: 'CreateAccount'
  }
	render() {
		return (
			<View style={styles.createContainer}>
			<Text style={styles.text}>Soy CreateAccount</Text>
			</View>)
	}
}

const styles = {
	createContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		fontSize: 50
	}
}