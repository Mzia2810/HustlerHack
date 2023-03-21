import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
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
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/storeSlices/loginSlice';
const Login = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('')
  const [isLoggingIn, setIsloggingIn] = useState(false);
  const [Errors, setErrors] = useState([])

  const login = () => {
    if (!number && !password) {
      setErrors([
        'number',
        'password'
      ])
    } else if (!number) {
      setErrors([
        'number'
      ])
    } else if (!password) {
      setErrors([
        'password'
      ])
    } else {
      setIsloggingIn(true)

      navigation.replace('AuthenticatedStack')

      //TODO
      // dispatch(loginUser({
      //   number,
      //   password,
      //   onSuccess: () => {
      //     setIsloggingIn(false);
      //     navigation.replace('Home')
      //    },
      //   onFailed: () => {
      //     setIsloggingIn(false);
      //   }
      // }))
    }
  }

  const removeKeyFromErrors = (key) => {
    let isInArray = Errors?.includes(key);
 
    if (isInArray) {
      let RemainingErrors = Errors?.filter((error) => error != key);
       
      setErrors(RemainingErrors)
    }
  }
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
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/logo.png')}
            style={{ width: 278, height: 53, marginTop: 50, marginBottom: 50 }}
          />
          <View style={styles.form}>
            <View style={styles.inputForm}>
              <Text style={styles.inputLabel}>Phone Number</Text>
              <TextInput
                style={styles.input}
                placeholder="+255 (0) 7xxxxxxxx"
                keyboardType="phone-pad"
                value={number}
                onChangeText={(text) => {
                  if (text?.length > 0) {
                    removeKeyFromErrors('number')
                  }
                  setNumber(text)
                }}
                maxLength={16}
              />
            </View>
            {
              Errors?.includes('number') && <Text style={{ color: '#ff2222' }}>Phone number is required.</Text>
            }
            <View style={styles.inputForm}>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput style={styles.input} placeholder="Input Password" value={password} onChangeText={(text) => {


                if (text?.length > 0) {
                  removeKeyFromErrors('password')
                }
                setPassword(text)
              }} />
            </View>
            {
              Errors?.includes('password') && <Text style={{ color: '#ff2222' }}>Password is required.</Text>
            }
            <View style={styles.formBtnContainer}>
              <View style={styles.formBtn}>
                <TouchableNativeFeedback disabled={isLoggingIn} onPress={login}>
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
