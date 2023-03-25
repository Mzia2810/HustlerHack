import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../store/configStore';
import { clearToken } from '../store/storeSlices/loginSlice';
import { userInitialStates } from '../store/storeSlices/userSlicer';

const Profile = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch();

  const user = useSelector<StoreState, userInitialStates>(state => state.user)

  const logout = () => {
    dispatch(clearToken())
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          {
            name: 'Login',

          },
        ],
      })
    )

  }
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          resizeMode="contain"
          style={{ width: 202, height: 39, marginTop: 50 }}
          source={require('../assets/logo.png')}
        />
      </View>
      <View style={styles.profileInfo}>
        <View>
          <Text style={styles.profileInfoTitle}>Name</Text>
          <Text style={styles.profileInfoTitle}>Phone number</Text>
          <Text style={styles.profileInfoTitle}>Email address</Text>
          <Text style={styles.profileInfoTitle}>Gender</Text>
          <Text style={styles.profileInfoTitle}>Date of birth</Text>
          <Text style={styles.profileInfoTitle}>County of residence </Text>
          <Text style={styles.profileInfoTitle}>ID Number</Text>
          <Text style={styles.profileInfoTitle}>Take photo</Text>
        </View>
        <View>
          <Text style={[styles.profileInfoText, { textTransform: 'capitalize' }]}>{user?.user?.first_name + ' ' + user?.user?.last_name}</Text>
          <Text style={styles.profileInfoText}>
            {user?.user?.phone} <Icon name="edit" size={18} color="#000000" />
          </Text>
          <Text style={styles.profileInfoText}>{user?.user?.email || '---'}</Text>
          <Text style={styles.profileInfoText}>{user?.user?.gender || ""}</Text>
          <Text style={styles.profileInfoText}>{user?.user?.dob}</Text>
          <Text style={styles.profileInfoText}>{user?.user?.country}</Text>
          <Text style={styles.profileInfoText}>{user?.user?.cnic}</Text>
          <Text style={[styles.profileInfoText, styles.addBtn]}>add</Text>
        </View>
      </View>
      <TouchableNativeFeedback onPress={() => navigation.navigate('ForgotPass')}>
        <View style={styles.resetPassContainer}>
          <Text style={styles.resetPass}>Reset Password</Text>
          <Icon name="lock" size={22} color="#000000" />
        </View>
      </TouchableNativeFeedback>


      <TouchableNativeFeedback onPress={logout}>
        <View style={styles.resetPassContainer}>
          <Text style={[styles.resetPass, { color: 'red' }]}>Loggout?</Text>
          {/* <Icon name="lock" size={22} color="#000000" /> */}
        </View>
      </TouchableNativeFeedback>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '400',
          fontSize: 14,
          lineHeight: 17,
          color: '#008325',
          marginTop: 80,
        }}>
        Powered by hustlerfundhack.co.ke
      </Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  image: {
    alignItems: 'center',
  },
  profileInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    marginTop: 50,
  },
  profileInfoTitle: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 22,
    color: '#000000',
    marginBottom: 15,
  },
  profileInfoText: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 22,
    color: '#000000',
    marginBottom: 15,
  },
  addBtn: {
    color: '#3BC762'
  },
  resetPassContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  resetPass: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 22,
    color: '#14FA47',
    marginRight: 6,
  },
})