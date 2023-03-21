import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ChangeLanguage from './app/screens/ChangeLanguage';
import ContactUs from './app/screens/ContactUs';
import CustomDrawer from './app/screens/CustomDrawer';
import ForgotPass from './app/screens/Forgotpass';
import Home from './app/screens/Home';
import LiveChat from './app/screens/LiveChat';
import Login from './app/screens/Login';
import Notifications from './app/screens/Notifications';
import PersonalInfo from './app/screens/PersonalInfo';
import Profile from './app/screens/Profile';
import Records from './app/screens/Records';
import Signup from './app/screens/Signup';
import WelcomeScreen from './app/screens/WelcomeScreen';
import { Provider } from 'react-redux'
import { store } from './app/store/configStore';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


const App = () => {

  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="ChangeLanguage" component={ChangeLanguage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ForgotPass" component={ForgotPass} />
        <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
        <Stack.Screen
          name="AuthenticatedStack"
          component={AuthenticatedStack}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

const AuthenticatedStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerLabelStyle: {
          marginLeft: -22,
          fontSize: 18,
          color: '#000000',
          fontWeight: 500,
        },
        drawerItemStyle: {
          borderColor: '#05F000',
          borderBottomWidth: 5,
          marginHorizontal: -4,
          marginBottom: 0,
          marginTop: 0,
        },
        drawerActiveBackgroundColor: '#05F000',
      }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: '#05F000',
          },
          headerTitle: props => <LogoTitle {...props} />,
          headerTitleAlign: 'center',
          drawerIcon: () => <Icon name="house" color="#000000" size={25} />,
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          headerStyle: {
            backgroundColor: '#65FF87',
          },
          headerTitle: "My Profile",
          headerTitleAlign: 'center',
          drawerIcon: () => <Icon name="person-add-alt" color="#000000" size={25} />,
        }}
      />
      <Drawer.Screen
        name="Records"
        component={Records}
        options={{
          headerStyle: {
            backgroundColor: '#65FF87',
          },
          headerTitleStyle: {
            fontSize: 14
          },
          headerTitle: "Submitted hustler fund loan extensions",
          headerTitleAlign: 'center',

          drawerIcon: () => <Icon name="receipt-long" color="#000000" size={25} />,
        }}
      />
      <Drawer.Screen
        name="Notifications"
        component={Notifications}
        options={{
          headerStyle: {
            backgroundColor: '#65FF87',
          },
          headerTitleAlign: 'center',
          drawerLabel: 'Notifications',
          drawerIcon: () => (
            <Icon name="notifications-active" color="#000000" size={25} />
          ),
        }}
      />
      <Drawer.Screen
        name="Contact Us"
        component={ContactUs}
        options={{
          headerStyle: {
            backgroundColor: '#a7e5b9',
          },
          headerTitleAlign: 'center',
          drawerLabel: 'Contact Us',
          drawerIcon: () => <Icon name="mail" color="#000000" size={25} />,
        }}
      />
      <Drawer.Screen
        name="Live Chat"
        component={LiveChat}
        options={{
          headerStyle: {
            backgroundColor: '#a7e5b9',
          },
          headerTitleAlign: 'center',
          drawerLabel: 'Live Chat',
          drawerIcon: () => <Icon name="mail" color="#000000" size={25} />,
        }}
      />
    </Drawer.Navigator>
  );
};

const LogoTitle = () => {
  return (
    <Image
      style={{ width: 267, height: 58, resizeMode: 'contain', marginTop: 70 }}
      source={require('./app/assets/logo.png')}
    />
  );
};

export default App;