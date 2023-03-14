import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  TouchableOpacity,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Login = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={['#3ac762', '#9cf4b4']}
      style={{flex: 1, justifyContent: 'center'}}>
      <ImageBackground
        resizeMode="cover"
        source={require('../assets/bg.png')}
        style={styles.image}>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/logo.png')}
            style={{width: 278, height: 53, marginTop: 50, marginBottom: 50}}
          />
          <View style={styles.form}>
            <View style={styles.inputForm}>
              <Text style={styles.inputLabel}>Phone Number</Text>
              <TextInput
                style={styles.input}
                placeholder="+255 (0) 7xxxxxxxx"
                keyboardType="phone-pad"
              />
            </View>
            <View style={styles.inputForm}>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput style={styles.input} placeholder="Input Password" />
            </View>
            <View style={styles.formBtnContainer}>
              <View style={styles.formBtn}>
                <TouchableNativeFeedback>
                  <Icon name="east" color="#fff" size={40} />
                </TouchableNativeFeedback>
              </View>
            </View>
            <View style={styles.navigationItem}>
              <TouchableOpacity
                onPress={() => navigation.navigate('ForgotPass')}>
                <Text style={styles.forgotPass}>Forgot Password?</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.signUp}>{`Sign Up >>`}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 400,
              fontSize: 14,
              color: '#008325',
              marginTop: 10,
            }}>
            Powered by hustlerfundhack.co.ke
          </Text>
        </View>
      </ImageBackground>
    </LinearGradient>
  );
};

export default Login;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 568,
    width: '100%',
  },

  inputLabel: {
    fontSize: 14,
    color: '#000000',
    fontWeight: 700,
    marginTop: 30,
  },
  input: {
    fontSize: 14,
    color: '#AF9999',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: '#C3E0DD',
    borderRadius: 50,
    backgroundColor: '#FDFDFD',
    marginTop: 10,
    width: 370,
  },
  formBtnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  formBtn: {
    backgroundColor: '#3467FF',
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: 60,
    height: 55,
    borderRadius: 50,
    marginVertical: 50,
    paddingHorizontal: 10,
  },
  navigationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 0,
    marginVertical: 20,
  },
  forgotPass: {
    fontSize: 14,
    color: '#AF9999',
    fontWeight: 700,
  },
  signUp: {
    fontSize: 24,
    color: '#3467FF',
    fontWeight: 800,
  },
});
