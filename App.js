import { StatusBar } from 'expo-status-bar';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import {Provider as RecordProvider} from './src/context/PRContext';
import CreateRecordScreen from './src/screens/CreateRecordScreen';
import ShowRecordScreen from './src/screens/ShowRecordScreen';
import EditRecordScreen from './src/screens/EditRecordScreen'

const navigator = createStackNavigator({
  Home: HomeScreen,
  Create: CreateRecordScreen,
  Show: ShowRecordScreen,
  Edit: EditRecordScreen,
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'Records', 
  }
})

const App = createAppContainer(navigator);

export default () => {
  return <RecordProvider>
    <App/>
  </RecordProvider>
}
