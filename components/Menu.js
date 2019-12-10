import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

export default class Menu extends React.Component {
	state = {
		leftVisible: false
	}

	changeState = (e) => {
		this.setState({leftVisible: !this.state.leftVisible})
	}

	render() {

		if (!this.state.leftVisible) {
			return (
				<TouchableOpacity onPress={this.changeState} style={styles.menuContainerFalse}>
				<Image 
				style={styles.imageUser} 
				source={require('../assets/nouser.png')} />
				</TouchableOpacity>
				)
		} else { return (
				<View style={styles.menuContainer}>
				<TouchableOpacity onPress={this.changeState}>
				<Image 
				style={styles.imageUser} 
				source={require('../assets/nouser.png')} />
				</TouchableOpacity>
				<View style={styles.menu}>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('CreateAccount')}>
				<Text style={styles.textMenu}>Create Account</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
				<Text style={styles.textMenu}>Log In</Text>
				</TouchableOpacity>
				</View>
				</View>
			) }
				
	
		}}

const styles = {
	menuContainerFalse: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: 10,
		paddingRight: 5,
		justifyContent: 'flex-start',
		width: '100%'
	},
	menuContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: 10,
		paddingRight: 5,
		justifyContent: 'space-between',
		width: '100%'
	},
	imageUser: {
		width: 70,
		height: 70, 
     	resizeMode: 'contain',
     	borderColor: 'black',
     	borderWidth: 1
     },
     menu: {
     	flex: 1,
     	flexDirection: 'row',
     	justifyContent: 'flex-end',
     	alignItems: 'center'
     },
     textMenu: {
     	fontSize: 20,
     	fontWeight: 'bold',
     	marginLeft: 40,
     	marginRight: 10
     }

}