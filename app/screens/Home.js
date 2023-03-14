import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import GetMoneyModal from './GetMoneyModal';

const Home = () => {
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
  return (
    <ScrollView>
      <ImageBackground
        source={require('../assets/Vector1.png')}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome {`first name`}</Text>
        </View>
      </ImageBackground>
      <View style={styles.mainContainer}>
        <View style={styles.biddingContainer}>
          <View style={styles.biddingButton}>
            <Text style={styles.biddingText}>Your current available </Text>
            <Text style={styles.biddingText}>Hustlerfund loan limit is </Text>
          </View>
          <View style={styles.score}>
            <Text style={styles.scoreText}>KSH</Text>
            <Text style={styles.scoreRate}>600</Text>
            <Icon
              name="arrow-drop-up"
              color="#4ECB71"
              style={styles.arrowIcon}
            />
          </View>
        </View>
        <Text style={styles.limit}>Current Existing Loan Limit extensions</Text>
        <View style={styles.loanAmounts}>
          {data.map((item, index) => (
            <TouchableNativeFeedback>
              <View key={item.id}>
                {item.text}
                <View style={styles.singleLoanAmount}>
                  <Text style={styles.singleLoanAmountText}>Amount</Text>
                  <Text style={styles.loanAmountQuantity}>
                    Ksh{' '}
                    <Text style={styles.loanAmountQuantityDollar}>
                      {item.dollar}
                    </Text>
                  </Text>
                </View>
              </View>
            </TouchableNativeFeedback>
          ))}
        </View>

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
        <GetMoneyModal />
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 400,
            fontSize: 14,
            lineHeight: 17,
            color: '#008325',
            marginTop: 5,
          }}>
          Powered by hustlerfundhack.co.ke
        </Text>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 30,
  },
  title: {
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 17,
    color: '#FFFFFF',
    marginTop: 40,
    paddingBottom: 40,
  },
  mainContainer: {
    paddingHorizontal: 17,
    paddingTop: 10,
  },
  biddingButton: {
    backgroundColor: '#fff8e9',
    borderWidth: 5,
    borderColor: '#F9B125',
    borderRadius: 40,
    paddingHorizontal: 38,
    paddingVertical: 9,
  },
  biddingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  score: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  biddingText: {
    fontWeight: 700,
    fontSize: 11,
    lineHeight: 13,
    color: '#3467FF',
  },
  scoreText: {
    fontWeight: 600,
    fontSize: 14,
    lineHeight: 15,
    color: '#000000',
    paddingTop: 30,
  },
  scoreRate: {
    fontWeight: 700,
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
    fontWeight: 700,
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
    fontWeight: 700,
    fontSize: 11,
    lineHeight: 13,
    textAlign: 'center',
  },
  loanAmountTextRed: {
    marginBottom: 5,
    color: 'red',
    fontWeight: 700,
    fontSize: 11,
    lineHeight: 13,
    textAlign: 'center',
  },
  singleLoanAmount: {
    backgroundColor: '#ecfffe',
    borderWidth: 5,
    borderColor: '#07EFE1',
    borderRadius: 40,
    paddingHorizontal: 10,
    paddingVertical: 5,
    textAlign: 'center',
    width: 114,
  },
  singleLoanAmountText: {
    textAlign: 'center',
    color: '#3467FF',
  },
  loanAmountQuantity: {
    textAlign: 'center',
    fontWeight: 700,
    fontSize: 11,
    lineHeight: 13,
    color: '#000000',
    paddingTop: 8,
  },
  loanAmountQuantityDollar: {
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 13,
    color: '#3467FF',
    paddingTop: 20,
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
    fontWeight: 700,
    fontSize: 10,
    lineHeight: 12,
    color: '#008325',
    marginBottom: 5,
  },
});
