import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './pages/Home'
import Friends from './pages/Friends'

const AppNavigator = () => {
    return(
        <Router>
        <Scene key = "root">
            <Scene key = "home" component = {Home} title = "Home" initial = {true} />
            <Scene key = "friends" component = {Friends} title = "Friends" />
        </Scene>
    </Router>
    )
}

export default AppNavigator