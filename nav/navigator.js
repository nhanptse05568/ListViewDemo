import {createAppContainer, createStackNavigator} from "react-navigation";
import Home from '../component/Home';
import Add from '../component/Add';

// create a stack navigator
var stacks = createStackNavigator({
    HomeScreen: Home,
    AddScreen: Add,
},{
    initialRouteName: 'HomeScreen',
});

export const AppContainer = createAppContainer(stacks);