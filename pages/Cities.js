import React from 'react'
import {Text, View} from 'react-native'

export default class Cities extends React.Component {
	static navigationOptions = {
    title: 'Cities'
  }
	render() {
		return (
			<View style={styles.citiesContainer}>
			<Text style={styles.text}>Soy Cities</Text>
			</View>)
	}
}

const styles = {
	citiesContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		fontSize: 50
	}
}