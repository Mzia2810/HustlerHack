import { CommonActions, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
  ActivityIndicator,
  Alert
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { clearForm, registerUser, updateSignupForm } from '../store/storeSlices/loginSlice';

const PersonalInfo = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const { userData } = useSelector(state => state.login)

  const [isLoading, setisLoading] = useState(false);
  const [states, setStates] = useState({
    first_name: '',
    last_name: '',
    email: '',
    dob: '',
    gender: '',

    cnic: '',
    address: '',
    country: '',

  })
  const onNext = () => {
    const { cnic, country, dob, email, first_name, gender, last_name, } = states

    if (!cnic || !country || !dob || !email || !first_name || !gender || !last_name) {
      Alert.alert('One of the required field is missing.');
      return
    }
    setisLoading(true)
    dispatch(updateSignupForm({
      ...states,
      address: country
    }))
    setTimeout(async () => {
      let response = await dispatch(registerUser())
      if (response?.payload?.status >= 200 && response?.payload?.status < 300) {
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [
              {
                name: 'AuthenticatedStack',

              },
            ],
          })
        );
        dispatch(clearForm())

      } else {
        setisLoading(false)
      }

    }, 2000);
  }

  React.useEffect(() => {
    return () => {
      setisLoading(false)
    }
  }, [])

  return (
    <LinearGradient
      colors={['#3ac762', '#9cf4b4']}
      style={{ flex: 1, justifyContent: 'center' }}>
      <ImageBackground
        resizeMode="cover"
        source={require('../assets/bg.png')}
        style={styles.image}>
        <ScrollView>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../assets/logo.png')}
              style={{ width: 278, height: 53, marginTop: 50, marginBottom: 10 }}
            />
            <View style={styles.form}>
              <View style={styles.inputForm}>
                <Text style={styles.inputLabel}>First name</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter first name"
                  value={states.first_name}
                  onChangeText={(text) => {
                    setStates({
                      ...states,
                      first_name: text
                    })
                  }}
                />
              </View>
              <View style={styles.inputForm}>
                <Text style={styles.inputLabel}>Last name</Text>
                <TextInput style={styles.input} placeholder="Enter last name"
                  value={states.last_name}
                  onChangeText={(text) => {
                    setStates({
                      ...states,
                      last_name: text
                    })
                  }} />
              </View>
              <View style={styles.inputForm}>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Email"
                  value={states.email}
                  onChangeText={(text) => {
                    setStates({
                      ...states,
                      email: text
                    })
                  }}
                />
              </View>
              <View style={styles.inputForm}>
                <Text style={styles.inputLabel}>Gender</Text>
                <TextInput style={styles.input} placeholder="Male"
                  value={states.gender}
                  onChangeText={(text) => {
                    setStates({
                      ...states,
                      gender: text
                    })
                  }}
                />
              </View>
              <View style={styles.inputForm}>
                <Text style={styles.inputLabel}>Date of Birth</Text>
                <TextInput style={styles.input} placeholder="15/11/2021"
                  value={states.dob}
                  onChangeText={(text) => {
                    setStates({
                      ...states,
                      dob: text
                    })
                  }}
                />
              </View>
              <View style={styles.inputForm}>
                <Text style={styles.inputLabel}>County of residence</Text>
                <TextInput style={styles.input} placeholder="Enter Location"
                  value={states.country}
                  onChangeText={(text) => {
                    setStates({
                      ...states,
                      country: text
                    })
                  }}
                />
              </View>
              <View style={styles.inputForm}>
                <Text style={styles.inputLabel}>Enter ID Number</Text>
                <TextInput style={styles.input} placeholder="Enter ID No"
                  value={states.cnic}
                  onChangeText={(text) => {
                    setStates({
                      ...states,
                      cnic: text
                    })
                  }}
                />
              </View>

              <View style={styles.formBtnContainer}>
                <TouchableNativeFeedback
                  disabled={isLoading}
                  onPress={onNext}>
                  <View style={styles.formBtn}>
                    {
                      isLoading ? <ActivityIndicator size={'small'} /> :
                        <Text style={styles.btnText}>NEXT</Text>
                    }
                  </View>
                </TouchableNativeFeedback>
              </View>
            </View>
          </View>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 400,
              fontSize: 14,
              color: '#008325',
            }}>
            Powered by hustlerfundhack.co.ke
          </Text>
        </ScrollView>
      </ImageBackground>
    </LinearGradient>
  );
};

export default PersonalInfo;

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
  formCheckbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
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

  formBtnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  formBtn: {
    backgroundColor: '#3467FF',
    paddingVertical: 14,
    borderRadius: 40,
    marginVertical: 0,
    paddingHorizontal: 10,
    width: 220,
  },

  btnText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 700,
    fontSize: 18,
  },
});
