import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import React from 'react'
import Home from './pages/Home';
import Cities from './pages/Cities'
import Login from './pages/Login'
import CreateAccount from './pages/CreateAccount'


const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Cities: { screen: Cities}, 
  Login: {screen: Login},
  CreateAccount: { screen: CreateAccount}
}, {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}