import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import { StoreState } from '../store/configStore'
const WelcomeScreen = ({ navigation }) => {

  const state = useSelector(state => state.login)
  const appState = useSelector(state => state.appState) || {}



  React.useEffect(() => {
    const {
      isPermissionAgreed ,
      isPrivacyPolicyAgreed 
    } = appState || {}
    !!state?.token ? navigation.replace('AuthenticatedStack') : setTimeout(() => {
      console.log('====================================');
      console.log('isPermissionAgreed && !!isPrivacyPolicyAgreed',
        isPermissionAgreed,
        isPrivacyPolicyAgreed,
        appState
      );
      console.log('====================================');
      if (!!isPermissionAgreed && !!isPrivacyPolicyAgreed) {
        navigation.replace('ChangeLanguage');
      } else if (!isPermissionAgreed) {
        navigation.replace('Premission');
      } else if (!isPrivacyPolicyAgreed) {
        navigation.replace('Privacy');
      } else {
        navigation.replace('Premission');
      }

    }, 2500);
  }, [])

  return (
    <LinearGradient
      colors={['#3ac762', '#9cf4b4']}
      style={{ flex: 1, justifyContent: 'center' }}>
      <ImageBackground
        resizeMode="cover"
        source={require('../assets/bg.png')}
        style={styles.image}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 300,
          }}>
          <Image
            source={require('../assets/logo.png')}
            style={{ width: 278, height: 53 }}
          />
          <Text
            style={{
              fontSize: 14,
              fontWeight: 400,
              color: '#033C13',
              marginTop: 9,
            }}>
            Extend Your Loan Limit Today
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 400,
              fontSize: 14,
              lineHeight: 17,
              color: '#008325',
              marginTop: 250,
            }}>
            Powered by hustlerfundhack.co.ke
          </Text>
        </View>
      </ImageBackground>
    </LinearGradient>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 568,
    width: '100%',
  },
});
