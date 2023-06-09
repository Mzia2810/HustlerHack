import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Image, LogBox, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
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
import Premission from './app/screens/Premission';
import Privacy from './app/screens/Privacy';


import { Provider } from 'react-redux'
import { store, persistor } from './app/store/configStore';
import { PersistGate } from 'redux-persist/integration/react';
import { ScrollView } from 'react-native';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

LogBox.ignoreAllLogs(true)
const App = () => {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>

        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Premission" component={Premission} />
            <Stack.Screen name="Privacy" component={Privacy} />

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
      </PersistGate>
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
        name="FAQ's"
        component={FaqScreen}
        options={{
          headerStyle: {
            backgroundColor: '#a7e5b9',
          },
          headerTitleAlign: 'center',
          drawerLabel: "FAQ's",
          drawerIcon: () => <Icon2 name="frequently-asked-questions" color="#000000" size={25} />,
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

const FaqScreen = () => {
  return (
    <View style={{ flex: 1, }}>
      <ScrollView style={{ flex: 1 }}
        contentContainerStyle={{
          flexGrow: 1,
          padding: 16
        }}
      >
        {
          [
            `Frequently asked questions`,
            ' ',
            `What is hustlerhack`,
            `Hustlerhack is a kenyan company running under hustlerfundhack whose main priority is to ensure kenyans who are elligible for Hustlerfund Personal loan to get their loan limits extended and provide a favourabe repayment plan for each client.`, `How long does it take to get my loan limit extended?`,
            `It takes between 2hrs to 72hrs to get your loan limit extended.`,
            ' ',
            `How can i confirm that my loan limit has been extended?`,
            ' ',
            `You can simply dial *254# and check on your personal Loan limit`,
            ' ',
            `Does it work with business loans`,
            ' ',
            `No, we only extend personal loans`
          ]?.map((text, index) => {
            return (
              <Text key={index} style={{ color: '#000',fontSize:14,fontWeight:'500', textAlign: 'justify' }}>{text}</Text>
            )
          })
        }

      </ScrollView>
    </View>
  )
}
const LogoTitle = () => {
  return (
    <Image
      style={{ width: 267, height: 58, resizeMode: 'contain', marginTop: 70 }}
      source={require('./app/assets/logo.png')}
    />
  );
};

export default App;