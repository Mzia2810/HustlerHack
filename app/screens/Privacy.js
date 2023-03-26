import React, { useState } from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useDispatch } from 'react-redux';
import { changePrivacyPolicyState } from '../store/storeSlices/appStateSlicer';

const data = [
  {
    title: `Privacy Policy for Hustler Fund Hack`,
    desc: `At Hustler Fund Hack, accessible from hustlerfundhack.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Hustler Fund Hack and how we use it.
    If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.     `,
  },
  {
    title: `Log Files`,
    desc: `Hustler Fund Hack follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services’ analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users’ movement on the website, and gathering demographic information.  `,
  },
  {
    title: `Privacy Policies`,
    desc: `You may consult this list to find the Privacy Policy for each of the advertising partners of Hustler Fund Hack. Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Hustler Fund Hack, which are sent directly to users’ browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit. Note that Hustler Fund Hack has no access to or control over these cookies that are used by third-party advertisers.
     `,
  },
  {
    title: `Third Party Privacy Policies`,
    desc: ` Hustler Fund Hack’s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers’ respective websites. What Are Cookies?
    `,
  },
  {
    title: `Children’s Information `,
    desc: ` Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. Hustler Fund Hack does not knowingly collect any Personal Identifiable Information from children under the age of 18. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
    `,
  },
  {
    title: `Online Privacy Policy Only`,
    desc: `This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Hustler Fund Hack. This policy is not applicable to any information collected offline or via channels other than this website.`,
  },
  {
    title: ` Consent`,
    desc: `By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.  `,
  },
];

const renderItem = ({ item }) => {
  return (
    <View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={{ textAlign: 'justify', color: '#000' }}>{item.desc}</Text>
    </View>
  );
};

const Privacy = ({ navigation }) => {
  const dispatch = useDispatch()
  const [visible, setVisible] = useState(false);
  const OnDisAgree = () => {
    dispatch(changePrivacyPolicyState(false))
    navigation.navigate('ChangeLanguage')
  }
  const onCofirm = () => {
    setVisible(false)
    dispatch(changePrivacyPolicyState(true))
    navigation.navigate('ChangeLanguage')
  }
  return (
    <View style={{ flex: 1,padding:wp(2) }}>
      <View style={{
        width: wp('100%'),
        justifyContent: 'center',
        alignItems: 'center',
        // padding: 10
      }}>
        <Image style={{
          resizeMode: 'contain',
          height: hp(6),
          width: wp(30),
          alignSelf: 'center',

        }} source={require('../assets/PLogo.png')} />
      </View>

      <View style={{ width: wp('90%'), height: hp('83%'), alignSelf: 'center' }}>
        <Text style={styles.Privacy}>Privacy policies</Text>
        <FlatList
          style
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={styles.btnParent}>
        <TouchableOpacity onPress={OnDisAgree} style={styles.btn1}>
          <Text style={styles.btntext}>I Disagree</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setVisible(true)}
          style={styles.btn2}>
          <Text style={[styles.btntext, { color: 'white' }]}>I Agree</Text>
        </TouchableOpacity>
      </View>

      <Modal
        transparent
        visible={visible}
        onRequestClose={() => setVisible(false)}>
        <TouchableOpacity activeOpacity={1} style={{ 
           flex: 1, backgroundColor: '#00000040',
           justifyContent: 'center',
           alignItems: 'center'
         }} onPress={() => setVisible(false)}>
       
        <TouchableOpacity activeOpacity={1} style={styles.modalView}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '600',
              lineHeight: 18,
              color: '#000',
            }}>
            Notice
          </Text>
          <View>
          <Text style={{ textAlign: 'justify', marginVertical: hp(2), color: "#000", }}>
              In order to evaluate your qualifications and provide you with
              better services, we need your authorization to collect your
              relevant information. Please confirm whether to deny the
              permission and understand that this operation will exit the APP,
              or cancel the operation?{' '}
            </Text>
          </View>

          <View style={styles.bntParentModal}>
            <TouchableOpacity
              onPress={() => setVisible(false)}
              style={styles.btn1Modal}>
              <Text style={styles.btntext}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onCofirm}
              style={styles.btn2Modal}>
              <Text style={[styles.btntext, { color: 'white' }]}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        </TouchableOpacity>
      </Modal>

    </View>
  );
};

export default Privacy;

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    width: wp('80%'),
    borderRadius: 10,
    paddingVertical: hp(2),
    paddingHorizontal: wp(2)
  },
  btn1Modal: {
    borderWidth: 2,
    borderColor: '#5ECE7D',
    // paddingHorizontal: 18,
    // paddingVertical: 6,
    width: wp('30%'),
    height: hp('5%'),
    borderRadius: 8,
    justifyContent: 'center',
  },
  btn2Modal: {
    width: wp('30%'),
    height: hp('5%'),
    borderWidth: 2,
    borderColor: '#5ECE7D',
    backgroundColor: '#5ECE7D',
    // paddingHorizontal: 18,
    // paddingVertical: 6,
    borderRadius: 5,
    justifyContent: 'center',
  },
  bntParentModal: {
    width: wp('70%'),
    alignSelf: 'center',
    // marginTop: hp('10%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Privacy: {
    color:"#000",
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 20,
    marginVertical: hp('2%'),
    textAlign: 'justify',
  },
  btnParent: {
    width: wp('90%'),
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    color:"#000",
    fontWeight: '700',
    lineHeight: 20,
    marginVertical: hp('1%'),
    textAlign: 'justify',
  },
  btn1: {
    borderWidth: 2,
    borderColor: '#5ECE7D',
    // paddingHorizontal: 18,
    // paddingVertical: 6,
    width: wp('40%'),
    height: hp('5%'),
    borderRadius: 8,
    justifyContent: 'center',
  },
  btn2: {
    width: wp('40%'),
    height: hp('5%'),
    borderWidth: 2,
    borderColor: '#5ECE7D',
    backgroundColor: '#5ECE7D',
    // paddingHorizontal: 18,
    // paddingVertical: 6,
    borderRadius: 5,
    justifyContent: 'center',
  },
  btntext: {
    color: '#55D378',
    fontSize: 20,
    fontWeight: '800',
    lineHeight: 24,
    textAlign: 'center',
  },
});
