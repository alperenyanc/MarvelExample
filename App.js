import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Contact from './src/screens/drawer/Contact';
import AboutUs from './src/screens/drawer/AboutUs';
import CharactersList from './src/screens/list/CharactersList';
import CharactersDetail from './src/screens/detail/CharactersDetail';
import {initializeStores} from './src/store/Configure.store.js';
import {Provider} from 'mobx-react';
import {textStyles} from './src/assets/style/main';

const Stack = createStackNavigator();
function HomeScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Characters List" component={CharactersList} />
      <Stack.Screen name="CharactersDetail" component={CharactersDetail} />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

export default class App extends React.Component {
  state = {
    loading: true,
  };
  stores;
  componentDidMount() {
    this.load().catch(console.warn);
  }
  load = async () => {
    this.stores = await initializeStores();
    this.setState({loading: false});
  };
  renderLoading = () => <View />;

  render() {
    return this.state.loading ? (
      this.renderLoading()
    ) : (
      <Provider {...this.stores}>
        <SafeAreaView style={{flex: 1}}>
          <NavigationContainer>
            <Drawer.Navigator
              drawerStyle={{
                backgroundColor: '#e63020',
                width: 200,
              }}
              drawerContentOptions={{
                activeTintColor: '#fff',
                itemStyle: {marginVertical: 10},
                inactiveTintColor: '#595454',
                labelStyle: {fontSize: 16, fontWeight: '700'},
              }}
              initialRouteName="Home">
              <Drawer.Screen name="Home" component={HomeScreen} />

              <Drawer.Screen name="Contact" component={Contact} />
              <Drawer.Screen name="AboutUs" component={AboutUs} />
            </Drawer.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </Provider>
    );
  }
}
