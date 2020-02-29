import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentView from './src/screens/ComponentScreen';
import ListView from './src/screens/ListView';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    ComponentView: ComponentView,
    ListView: ListView,
    image: ImageScreen,
    counter: CounterScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
